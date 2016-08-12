/**
 * Created by yezm on 11/08/2016.
 */

import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'user-center',
  templateUrl: 'user-center.component.html'
})
export class UserCenterComponent{
  constructor(public auth: AuthService){
      auth.checkStatus();
  }

}
