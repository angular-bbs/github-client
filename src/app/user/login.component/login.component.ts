/**
 * Created by yezm on 10/08/2016.
 */

import {Component} from '@angular/core';
import {AuthService} from '../../shared/auth.service';
@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  providers:[AuthService]
})

export class LoginComponent{
  constructor(private auth: AuthService){

  }
}
