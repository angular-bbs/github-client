import {Routes, RouterModule} from '@angular/router';
import {authProviders} from './user/user.routing';

/**
 * Created by yezm on 10/08/2016.
 */

const appRoutes: Routes = [

];

export const appRoutingProviders: any[] = [
  authProviders
];

export const routing = RouterModule.forRoot(appRoutes);


