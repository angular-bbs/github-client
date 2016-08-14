/**
 * Created by yezm on 12/08/2016.
 */

import {Component, OnInit, OnDestroy} from "@angular/core";
import {AuthService} from "../../shared/auth.service";
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";
import {Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
@Component({
  selector: 'change-password',
  templateUrl: 'change-password.component.html'
})

export class ChangePasswordComponent implements OnDestroy, OnInit{
  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  changePasswordForm: FormGroup;


  private sub: Subscription;
  isSuccess: boolean = false;
  errorMessage: string;

  constructor(private auth: AuthService, private formBuilder: FormBuilder) {

  }

  changePassword(currentPassword: string, newPassword: string, confirmPassword: string) {
    if(!this.changePasswordForm.valid){
      return;
    }
    if (!currentPassword) {
      this.errorMessage = 'Current Password is empty';
      return;
    }
    if (newPassword !== confirmPassword) {
      this.errorMessage = 'Confirm password does not match with new password';
      return;
    }
    this.sub = this.auth.changePassword(currentPassword, newPassword, confirmPassword)
      .subscribe(data => {
        console.log('Password has been changed');
        this.isSuccess = true;
      }, (err) => {
        this.errorMessage = "Incorrect Password";
      });
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }

  }

}
