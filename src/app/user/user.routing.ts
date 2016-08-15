import {Routes, RouterModule} from '@angular/router';
import {LoginGithubComponent} from './login-github.component/login-github.component';
import {UserCenterComponent} from './user-center.component';
import {AuthGuardService} from '../shared/auth-guard.service';
import {AuthService} from '../shared/auth.service';
import {ManageAccountComponent} from "./manage-account.component/manage-account.component";
import {CreatePasswordComponent} from "./password/create-password.component";
import {ForgotPasswordComponent} from "./password/forgot-password.component";
import {ResetPasswordComponent} from "./password/reset-password.component";
import {ChangePasswordComponent} from "./password/change-password.component";
/**
 * Created by yezm on 11/08/2016.
 */

export const userRoutes: Routes = [
  {
    path: '',
    redirectTo: '/user-center',
    pathMatch: 'full'
  },
  {
    path: 'user-center',
    component: UserCenterComponent,
    children: [
      {path: '', component: ManageAccountComponent},
      {path: 'login-github', component:LoginGithubComponent},
      {path: 'manage-account', component: ManageAccountComponent},
      {path: 'create-password', component: CreatePasswordComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: 'change-password', component: ChangePasswordComponent}
    ]
  }
];

export const userRouting = RouterModule.forChild(userRoutes);

