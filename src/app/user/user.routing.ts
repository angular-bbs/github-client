import {Routes, RouterModule} from '@angular/router';
import {LoginGithubComponent} from './login-github.component/login-github.component';
import {UserCenterComponent} from './user-center.component';
import {AuthGuardService} from '../shared/auth-guard.service';
import {AuthService} from '../shared/auth.service';
import {ManageAccountComponent} from "./manage-account.component/manage-account.component";
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
      {path: 'manage-account', component: ManageAccountComponent}
    ]
  }
];

export const userRouting = RouterModule.forChild(userRoutes);

export const authProviders = [
  AuthGuardService,
  AuthService
];
