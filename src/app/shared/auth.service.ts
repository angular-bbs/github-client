import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Http} from '@angular/http';
import {Uuid} from './uuid-generator.service';
import {api} from '../user/shared/api.const';
import {Router} from "@angular/router";
import {User} from "./user.interface";
@Injectable()
export class AuthService {
  user: User = {
    hasPassword: false,
    username: '',
    isLoggedIn: false
  };
  constructor(private http: Http, private router: Router) {

  }
  code: string;
  redirectUrl: string;

  login() {
    // enquire if logged, if not redirect to login router.
    //this.http.post()
    // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    console.log('Todo: Login locally actions');
  }

  logout() {
    this.http.post(api.logoutEndpoint, {}).subscribe(d => {
      this.user.isLoggedIn = false;
      this.user.username = '';
      this.user.hasPassword = false;
    }, (err) => {
      console.log(err);
    });
  }

  checkStatus() {
    this.http.get(api.checkStatusEndpoint).subscribe(d => {
        this.user.isLoggedIn = true;
        var result = d.json();
        this.user.username = result.name;
        this.user.hasPassword = result.hasPassword;
      }, (err) => {
        console.log(err);
    })
  }

  loginWithGithub(state: string, code: string) {
    this.http.post(api.loginGithubEndpoint, {
      state: state,
      code: code,
      redirect_url: this.router.serializeUrl(this.router.createUrlTree(['/user-center']))
    }).subscribe((data)=> {
        var result = data.json();
        this.user.username = result.name;
        this.user.hasPassword = result.hasPassword;
        this.user.isLoggedIn = true;
        this.router.navigate(['/user-center']);
    }, (err)=> {
      console.error(err);
    });
  }

  createPassword(password: string, confirmPassword: string) {
    this.http.post(api.createPasswordEndpoint, {
      password: password,
      confirmPassword: confirmPassword
    }).subscribe(d => {
      console.log('Create Password response:');
      console.log(d);
      this.user.hasPassword = true;
      this.router.navigate(['/user-center/manage-account']);
    }, (err) => {
      console.error(err);
    });
  }

  changePassword() {
    console.log('Todo: Change Password Action.');
  }

  forgotPassword() {
    this.router.navigate(['/user-center/forgot-password']);
  }

  private updateUserInfo(username: string = '', hasPassword: boolean = false, isLoggedIn: boolean = false){
    this.user.hasPassword = hasPassword;
    this.user.isLoggedIn = isLoggedIn;
    this.user.username = username;
  }
}
