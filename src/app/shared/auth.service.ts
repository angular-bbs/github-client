import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Http} from '@angular/http';
import {Uuid} from './uuid.service';
import {api} from '../user/shared/api.const';
import {Router} from "@angular/router";
@Injectable()
export class AuthService {

  constructor(private http: Http, private uuid: Uuid, private router: Router) {
    if (!this.csrfToken) {
      this.nextCsrfToken();
    }
  }

  get csrfToken(): string {
    var uuid = sessionStorage.getItem('csrfToken');
    return uuid;
  }

  set csrfToken(value: string) {
    sessionStorage.setItem('csrfToken', value);
  }

  code: string;

  nextCsrfToken(): void {
    this.csrfToken = this.uuid.newUuid();
  }

  isLoggedIn: boolean = false;

  redirectUrl: string;
  username: string;
  hasPassword: boolean = false;

  sub: Subscription;

  login() {
    // enquire if logged, if not redirect to login router.
    //this.http.post()
    // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    console.log('Todo: Login locally actions');
  }

  logout() {
    var s = this.http.post(api.logoutEndpoint, {}).subscribe(d=> {
      s.unsubscribe();
      this.isLoggedIn = false;
      this.username = null;
    });
  }

  checkStatus() {
    this.sub = this.http.get(api.checkStatusEndpoint).subscribe(d => {
      console.log(d);
      this.sub.unsubscribe();
      if (d == null) {
        this.username = null;
        return null;
      }
      if (d.ok) {
        this.isLoggedIn = true;
        var result = d.json();
        this.username = result.name;
        this.hasPassword = result.hasPassword;
      }
    });
  }

  loginWithGithub(state: string, code: string) {
    var s = this.http.post(api.loginGithubEndpoint, {
      state: state,
      code: code,
      redirect_url: this.router.serializeUrl(this.router.createUrlTree(['/user-center']))
    }).subscribe((data)=> {
      var result = data.json();
      this.username = result.name;
      this.hasPassword = result.hasPassword;
      this.isLoggedIn = true;
      this.router.navigate(['/user-center']);
    }, (err)=> {
      console.error(err);
    });
  }

  manageAccount() {
    this.router.navigate(['/user-center/manage-account']);
  }

  createPassword() {
    console.log('Todo: Create Password Action.');
  }

  changePassword() {
    console.log('Todo: Change Password Action.');
  }

  forgotPassword(){
    this.router.navigate(['/user-center/forgot-password']);
  }

}
