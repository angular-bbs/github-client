/**
 * Created by yezm on 12/08/2016.
 */

import {Component, OnInit, OnDestroy} from "@angular/core";
import {AuthService} from "../../shared/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
@Component({
  selector: 'reset-password',
  templateUrl: 'reset-password.component.html'
})

export class ResetPasswordComponent implements OnInit, OnDestroy {
  code: string;
  email: string;
  errorMessage: string;
  private sub: Subscription;
  private sub1: Subscription;
  resetPasswordForm: FormGroup;
  isSuccess = false;

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit(): any {
    this.sub = this.route.queryParams.subscribe((params: {code: string, email: string}) => {
      this.code = params.code;
      this.email = params.email;
      console.log(this.email);
      console.log(this.code);
    });

    this.resetPasswordForm = this.formBuilder.group({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

  resetPassword(password: string, confirmPassword: string) {
    if (!this.resetPasswordForm.valid) {
      return;
    }
    if (password !== confirmPassword) {
      this.errorMessage = 'Confirm password does not match with password';
    }

    this.sub1 = this.auth.resetPassword(this.email, this.code, password, confirmPassword).subscribe(data => {
      this.isSuccess = true;
    }, err => {
      this.errorMessage = err;
    })
  }

}
