/**
 * Created by yezm on 11/08/2016.
 */

import {Component} from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector:'login-local',
  templateUrl: 'login-local.component.html'
})

export class LoginLocalComponent{
  username: string;
  password: string;
  message: string;
  constructor(private authService: AuthService, private router: Router){

  }

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  login(){
    this.authService.login(this.username, this.password).subscribe(()=>{
      this.setMessage();
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
      this.router.navigate([redirect]);
    });

  }

  private setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  logout(){
    this.authService.logout();
    this.setMessage();
  }

}
