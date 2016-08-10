import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './user/login.component';
import {UserComponent} from './user/user.component';
import {AppComponent} from './app.component';
/**
 * Created by yezm on 10/08/2016.
 */

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user', component:UserComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
