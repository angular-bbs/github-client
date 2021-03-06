/**
 * Created by yezm on 11/08/2016.
 */
import { Injectable }     from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot}    from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.user.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = state.url;

    // Navigate to the login page
    this.router.navigate(['/user-center/login-local']);
    return false;
  }



}
