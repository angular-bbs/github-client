/**
 * Created by yezm on 12/08/2016.
 */

import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";
import {CustomValidators} from "../../shared/validate-email.directive";
import {Subscription} from "rxjs";
import {ValidationService} from "../../shared/validation.service";
@Component({
  selector: 'forgot-password',
  templateUrl: 'forgot-password.component.html'
})

export class ForgotPasswordComponent implements OnInit, OnDestroy{
  constructor(private auth: AuthService) {

  }
  isSuccess: boolean = false;
  errorMessage: string;
  emailControl: FormControl;
  private sub: Subscription;
  url: string;
  ngOnInit() {
    this.emailControl = new FormControl('', [Validators.required, ValidationService.emailValidator]);
  }

  submit() {
    if (!this.emailControl.valid) {
      this.errorMessage = 'Username cannot be empty.';
    }

    this.sub = this.auth.forgotPassword(this.emailControl.value)
      .subscribe((data:{_body: string})=> {
        this.url = data._body;
        this.isSuccess = true;
      }, err => {
        this.errorMessage = err;
      });
  }

  ngOnDestroy(){
    if(this.sub){
      this.sub.unsubscribe();
    }
  }
}
