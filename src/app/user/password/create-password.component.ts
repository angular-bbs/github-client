/**
 * Created by yezm on 12/08/2016.
 */

import {Component, OnDestroy, OnInit} from "@angular/core";
import {AuthService} from "../../shared/auth.service";
import {FormControl, FormGroup, Validators, FormBuilder} from "@angular/forms";
import {Subscription} from "rxjs";
@Component({
  selector: 'create-password',
  templateUrl:'create-password.component.html'
})

export class CreatePasswordComponent implements OnDestroy, OnInit{
  isSuccess: boolean = false;
  private errorMessage;
  private sub: Subscription;
  constructor(private auth: AuthService, private formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.createPasswordForm = this.formBuilder.group({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  createPasswordForm: FormGroup;

  createPassword(password: string, confirmPassword: string){
    if(!this.createPasswordForm.valid){
      return;
    }
    if(password !== confirmPassword){
      this.errorMessage = 'Confirm Password does not match password';
      return;
    }
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
