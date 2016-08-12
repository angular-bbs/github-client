/**
 * Created by yezm on 11/08/2016.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common/esm';
import {FormsModule} from '@angular/forms';
import {LoginGithubComponent} from './login-github.component/login-github.component';
import {AuthService} from '../shared/auth.service';
import {userRouting} from './user.routing';
import {UserCenterComponent} from './user-center.component';
import {HttpModule} from '@angular/http/esm';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import {ManageAccountComponent} from "./manage-account.component/manage-account.component";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    userRouting,
    HttpModule
  ],
  declarations:[
    LoginGithubComponent,
    UserCenterComponent,
    ManageAccountComponent,
    SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES
  ],
  providers:[
    AuthService
  ]

})

export class UserModule{}
