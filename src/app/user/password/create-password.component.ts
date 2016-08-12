/**
 * Created by yezm on 12/08/2016.
 */

import {Component} from "@angular/core";
import {AuthService} from "../../shared/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
@Component({
  selector: 'create-password',
  templateUrl:'create-password.component.html'
})

export class CreatePasswordComponent{
  constructor(private auth: AuthService){

  }

  createPasswordForm = new FormGroup({
    password: new FormControl(),
    confirmPassword: new FormControl()
  });


}
