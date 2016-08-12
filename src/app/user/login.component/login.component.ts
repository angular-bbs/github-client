/**
 * Created by yezm on 10/08/2016.
 */

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {Http} from '@angular/http';
import {api} from '../shared/api.const';
@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  providers:[AuthService]
})

export class LoginComponent  implements OnInit {
  ngOnInit(): void {
  }
  name: string;
  isAuthorized = false;
  constructor(private auth: AuthService, private http:Http){

  }
  checkAccountStatus(){
    this.http.get(api.checkStatusEndpoint).subscribe(d => {
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


  logout(){
    this.http.post(api.logoutEndpoint,{}).subscribe(response => {
      console.log(`status code: ${response.status}`);
    });
  }
}
