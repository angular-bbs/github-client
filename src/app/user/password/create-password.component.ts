/**
 * Created by yezm on 12/08/2016.
 */

import {Component, OnDestroy} from "@angular/core";
import {AuthService} from "../../shared/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
@Component({
  selector: 'create-password',
  templateUrl:'create-password.component.html'
})

export class CreatePasswordComponent implements OnDestroy{

  isSuccess: boolean = false;
  private errorMessage;
  private sub: Subscription;
  constructor(private auth: AuthService){

  }

  createPasswordForm = new FormGroup({
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  createPassword(password: string, confirmPassword: string){
    this.sub = this.auth.createPassword(password, confirmPassword)
      .subscribe(d => {
        console.log('Create Password response:');
        console.log(d);
        this.auth.user.hasPassword = true;
        this.isSuccess = true;
      }, (err) => {
        this.errorMessage = err;
      });
  }

  ngOnDestroy(): any {
    if(this.sub){
      this.sub.unsubscribe();
    }

  }
}
