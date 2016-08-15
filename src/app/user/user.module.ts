/**
 * Created by yezm on 11/08/2016.
 */
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginGithubComponent} from './login-github.component/login-github.component';
import {userRouting} from './user.routing';
import {UserCenterComponent} from './user-center.component';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import {ManageAccountComponent} from "./manage-account.component/manage-account.component";
import {CreatePasswordComponent} from "./password/create-password.component";
import {ForgotPasswordComponent} from "./password/forgot-password.component";
import {ResetPasswordComponent} from "./password/reset-password.component";
import {ChangePasswordComponent} from "./password/change-password.component";
import {ErrorMessageComponent} from "./shared/error-message.component";
import {ConfirmationComponent} from "./shared/confirmation.component";
import {SharedModule} from '../shared/sharedModule';

@NgModule({
  imports:[
    ReactiveFormsModule,
    userRouting,
    SharedModule
  ],
  declarations:[
    LoginGithubComponent,
    UserCenterComponent,
    ManageAccountComponent,
    CreatePasswordComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    ErrorMessageComponent,
    ConfirmationComponent,
    SEMANTIC_COMPONENTS,
    SEMANTIC_DIRECTIVES,
  ],
  providers:[

  ]

})

export class UserModule{}
