/**
 * Created by yezm on 11/08/2016.
 */

import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Uuid} from "../shared/uuid-generator.service";

@Component({
  selector: 'user-center',
  templateUrl: 'user-center.component.html'
})
export class UserCenterComponent {
  constructor(private authService: AuthService, private uuid: Uuid) {
    authService.checkStatus()
      .subscribe(d => {
        this.authService.user.isLoggedIn = true;
        var result = d.json();
        this.authService.user.name = result.name;
        this.authService.user.hasPassword = result.hasPassword;
        this.authService.user.email = result.email;
      }, (err) => {
        console.log(err);
      });
  }

  logout(){
    this.authService.logout()
      .subscribe(d => {
        this.authService.user.isLoggedIn = false;
        this.authService.user.name = '';
        this.authService.user.hasPassword = false;
        this.authService.user.email = '';
      }, (err) => {
        console.log(err);
      });
  }
}
