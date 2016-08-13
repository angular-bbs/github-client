/**
 * Created by yezm on 12/08/2016.
 */

import {Component, OnDestroy, OnInit} from "@angular/core";
import {AuthService} from "../../shared/auth.service";
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Uuid} from "../../shared/uuid-generator.service";
@Component({
  selector: 'manage-account',
  templateUrl: 'manage-account.component.html'
})

export class ManageAccountComponent implements OnDestroy, OnInit{

  ngOnInit(): any {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private sub: Subscription;

  constructor(public authService: AuthService, private router: Router, private formBuilder: FormBuilder, public uuid: Uuid) {

  }

  loginForm: FormGroup;

  errorMessage: string;

  get message() {
    return 'You are logged ' + (this.authService.user.isLoggedIn ? 'in as: ' + this.authService.user.name : 'out');
  }

  login(username: string, password: string) {
    if (username == null || password == null) {
      this.errorMessage = 'Username or password are not valid.';
      return;
    }
    this.sub = this.authService.login(username, password)
      .subscribe(data => {
        var result = data.json();
        this.authService.user.hasPassword = true;
        this.authService.user.email = result.email;
        this.authService.user.isLoggedIn = true;
        this.authService.user.name = result.name;
      }, err => {
        this.errorMessage = err;
      });
  }

  createPassword() {
    this.router.navigate(['/user-center/create-password']);
  }

  changePassword() {
    this.router.navigate(['/user-center/change-password']);
  }

  forgotPassword() {
    this.router.navigate(['/user-center/forgot-password']);
  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }

  }
}
