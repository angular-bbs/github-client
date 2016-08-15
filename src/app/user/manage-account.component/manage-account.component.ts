/**
 * Created by yezm on 12/08/2016.
 */

import {Component, OnDestroy, OnInit} from "@angular/core";
import {AuthService} from "../../shared/auth.service";
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Uuid} from "../shared/uuid.service";
import {ValidationService} from "../../shared/validation.service";
@Component({
  selector: 'manage-account',
  templateUrl: 'manage-account.component.html'
})

export class ManageAccountComponent implements OnDestroy, OnInit{

  ngOnInit(): any {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', Validators.required]
    });
  }

  private sub: Subscription;

  constructor(public auth: AuthService, private router: Router, private formBuilder: FormBuilder, public uuid: Uuid) {

  }

  loginForm: FormGroup;

  errorMessage: string;

  get message() {
    return 'You are logged ' + (this.auth.user.isLoggedIn ? 'in as: ' + this.auth.user.name : 'out');
  }

  login(username: string, password: string) {
    if (username == null || password == null) {
      this.errorMessage = 'Username or password are not valid.';
      return;
    }
    this.sub = this.auth.login(username, password)
      .subscribe(data => {
        var result = data.json();
        this.auth.user.hasPassword = true;
        this.auth.user.email = result.email;
        this.auth.user.isLoggedIn = true;
        this.auth.user.name = result.name;
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
