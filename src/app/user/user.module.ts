/**
 * Created by yezm on 11/08/2016.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common/esm';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginGithubComponent} from './login-github.component/login-github.component';
import {userRouting} from './user.routing';
import {UserCenterComponent} from './user-center.component';
import {HttpModule} from '@angular/http/esm';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import {ManageAccountComponent} from "./manage-account.component/manage-account.component";
import {CreatePasswordComponent} from "./password/create-password.component";
import {ForgotPasswordComponent} from "./password/forgot-password.component";
import {ResetPasswordComponent} from "./password/reset-password.component";
import {ChangePasswordComponent} from "./password/change-password.component";

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,
    userRouting,
    HttpModule
  ],
  declarations:[
    LoginGithubComponent,
    UserCenterComponent,
    ManageAccountComponent,
    CreatePasswordComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES
  ],
  providers:[

  ]

})

export class UserModule{}
