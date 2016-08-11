import {Routes, RouterModule} from '@angular/router';
import {LoginGithubComponent} from './login-github.component/login-github.component';
import {TokenComponent} from './token.component/token.component';
import {LoginComponent} from './login.component/login.component';
import {LoginLocalComponent} from './login-local.component/login-local.component';
import {UserCenterComponent} from './user-center.component';
import {AuthGuardService} from '../shared/auth-guard.service';
import {AuthService} from '../shared/auth.service';
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
      {path: '', component: LoginComponent},
      {path: 'login-github', component:LoginGithubComponent},
      {path: 'token', component: TokenComponent, canActivate: [AuthGuardService]},
      {path: 'login-local', component: LoginLocalComponent}
    ]
  }
];

export const userRouting = RouterModule.forChild(userRoutes);

export const authProviders = [
  AuthGuardService,
  AuthService
];
