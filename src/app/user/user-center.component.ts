/**
 * Created by yezm on 11/08/2016.
 */

import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {Uuid} from "../shared/uuid-generator.service";

@Component({
  selector: 'user-center',
  templateUrl: 'user-center.component.html'
})
export class UserCenterComponent{
  constructor(private auth: AuthService, private uuid: Uuid){
      auth.checkStatus();
  }

}
