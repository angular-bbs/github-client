/**
 * Created by yezm on 12/08/2016.
 */

import {Component} from "@angular/core";
import {AuthService} from "../../shared/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'manage-account',
  templateUrl: 'manage-account.component.html'
})

export class ManageAccountComponent{

  username: string;
  password: string;

  constructor(public authService: AuthService, private router: Router){

  }

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  login(){
    this.authService.login(this.username, this.password).subscribe(()=>{
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
      this.router.navigate([redirect]);
    });

  }

  get message() {
    return 'You are logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  logout(){
    this.authService.logout();
  }
}
