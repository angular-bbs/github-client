/**
 * Created by yezm on 12/08/2016.
 */

import {Component, OnInit, OnDestroy} from "@angular/core";
import {AuthService} from "../../shared/auth.service";
import {FormGroup, FormControl} from "@angular/forms";
import {Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
@Component({
  selector: 'change-password',
  templateUrl: 'change-password.component.html'
})

export class ChangePasswordComponent implements OnDestroy {
  changePasswordForm = new FormGroup({
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  private sub: Subscription;
  isSuccess: boolean = false;

  constructor(private auth: AuthService, private route: ActivatedRoute) {

  }

  changePassword(currentPassword: string, newPassword: string, confirmPassword: string) {
    if (currentPassword == null) {
      console.log('Current Password is empty');
      return;
    }
    if (newPassword !== confirmPassword) {
      console.log('confirm password does not match with new password');
      return;
    }
    this.sub = this.auth.changePassword(currentPassword, newPassword, confirmPassword)
      .subscribe(data => {
        console.log('Password has been changed');
        this.isSuccess = true;
      }, (err) => {
        console.log(err);
      });
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }

  }

}
