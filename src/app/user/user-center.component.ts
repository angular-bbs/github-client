/**
 * Created by yezm on 11/08/2016.
 */

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Http} from '@angular/http';
import {api} from './shared/api.const';
@Component({
  selector: 'user-center',
  templateUrl: 'user-center.component.html',
  providers: [AuthService]
})
export class UserCenterComponent implements OnInit {
  name: string;
  isAuthorized: boolean;

  constructor(private http: Http) {

  }

  ngOnInit(): void {
    this.checkAccountStatus();
  }

  checkAccountStatus(){
    this.http.get(api.checkStatusEndpoint, {withCredentials: true}).subscribe(d => {
      console.log(d);
      if (!!d) {
        return;
      }
      this.isAuthorized = d.ok;
      if (d.ok) {
        this.name = d.json().name;
      }
    });
  }

}
