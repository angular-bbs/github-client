/**
 * Created by yezm on 12/08/2016.
 */

import {Component} from "@angular/core";
import {AuthService} from "../../shared/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Uuid} from "../../shared/uuid-generator.service";
@Component({
  selector: 'manage-account',
  templateUrl: 'manage-account.component.html'
})

export class ManageAccountComponent{

  username: string;
  password: string;

  constructor(public authService: AuthService, private router: Router, private uuid: Uuid){

  }

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  login(){
    // this.authService.login(this.username, this.password).subscribe(()=>{
    //   let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
    //   this.router.navigate([redirect]);
    // });
    this.authService.login();

  }

  get message() {
    return 'You are logged ' + (this.authService.user.isLoggedIn ? 'in as: ' + this.authService.user.username : 'out');
  }

  logout(){
    this.authService.logout();
  }

  createPassword() {
    this.router.navigate(['/user-center/create-password']);
  }

  changePassword() {
    this.router.navigate(['/user-center/change-password']);
  }

  forgotPassword(){
    this.router.navigate(['/user-center/forgot-password']);
  }
}
