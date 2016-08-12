/**
 * Created by yezm on 11/08/2016.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common/esm';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login.component/login.component';
import {LoginGithubComponent} from './login-github.component/login-github.component';
import {TokenComponent} from './token.component/token.component';
import {AuthService} from '../shared/auth.service';
import {userRouting} from './user.routing';
import {UserCenterComponent} from './user-center.component';
import {LoginLocalComponent} from './login-local.component/login-local.component';
import {HttpModule} from '@angular/http/esm';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    userRouting,
    HttpModule,
    // SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES
  ],
  declarations:[
    LoginComponent,
    LoginGithubComponent,
    TokenComponent,
    UserCenterComponent,
    LoginLocalComponent,
    SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES
  ],
  providers:[
    AuthService
  ]

})

export class UserModule{}
