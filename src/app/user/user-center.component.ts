/**
 * Created by yezm on 11/08/2016.
 */

import {Component, OnDestroy} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Uuid} from "./shared/uuid.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'user-center',
  templateUrl: 'user-center.component.html',
  providers: [Uuid]
})
export class UserCenterComponent implements OnDestroy {
  private sub: Subscription;
  private sub1: Subscription;

  constructor(private auth: AuthService, private uuid: Uuid) {
    this.sub = auth.checkStatus()
      .subscribe(d => {
        this.auth.user.isLoggedIn = true;
        var result = d.json();
        this.auth.user.name = result.name;
        this.auth.user.hasPassword = result.hasPassword;
        this.auth.user.email = result.email;
      }, (err) => {
        console.log(err);
      });
  }

  logout() {
    this.sub1 = this.auth.logout()
      .subscribe(d => {
        this.auth.user.isLoggedIn = false;
        this.auth.user.name = '';
        this.auth.user.hasPassword = false;
        this.auth.user.email = '';
      }, (err) => {
        console.log(err);
      });
  }

  ngOnDestroy(): any {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.sub1) {
      this.sub1.unsubscribe();
    }

  }
}
