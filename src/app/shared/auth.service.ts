import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Http} from '@angular/http';
import {Uuid} from './uuid-generator.service';
import {api} from '../user/shared/api.const';
import {Router} from "@angular/router";
import {User} from "./user.interface";
import 'rxjs/add/operator/catch';
@Injectable()
export class AuthService {
  user: User = {
    hasPassword: false,
    name: '',
    isLoggedIn: false,
    email: ''
  };
  redirectUrl: string;
  errorMessage: string;

  constructor(private http: Http, private router: Router) {

  }

  login(username: string, password: string) {
    return this.http.post(api.loginWithLocalAccountEndpoint, {
      username: username,
      password: password
    }).catch(this.handleError);
  }

  logout() {
    return this.http.post(api.logoutEndpoint, {})
      .catch(this.handleError);
  }

  checkStatus() {
    return this.http.get(api.checkStatusEndpoint)
      .catch(this.handleError);
  }

  loginWithGithub(state: string, code: string) {
    return this.http.post(api.loginGithubEndpoint, {
      state: state,
      code: code,
      redirect_url: this.router.serializeUrl(this.router.createUrlTree(['/user-center']))
    }).catch(this.handleError);
  }

  createPassword(password: string, confirmPassword: string) {
    return this.http.post(api.createPasswordEndpoint, {
      password: password,
      confirmPassword: confirmPassword
    }).catch(this.handleError);
  }

  changePassword(currentPassword: string, newPassword: string, confirmPassword: string) {
    return this.http.post(api.changePasswordEndpoint, {
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword
    }).catch(this.handleError);
  }

  forgotPassword() {
    this.router.navigate(['/user-center/forgot-password']);
  }

  private setErrorMessage(err) {
    this.errorMessage = err;
    console.log(this.errorMessage);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error._body ? error._body :
        error.status ? `${error.status} - ${error.statusText}` :
          'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
