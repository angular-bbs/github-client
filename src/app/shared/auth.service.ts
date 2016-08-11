import { Injectable } from '@angular/core';
import * as uuid from "uuid";
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
@Injectable()
export class AuthService {

  constructor(private http: Http) {
    if (!this.csrfToken) {
      this.nextCsrfToken();
    }
  }

  get csrfToken(): string {
    return sessionStorage.getItem('csrfToken');
  }

  set csrfToken(value: string) {
    sessionStorage.setItem('csrfToken', value);
  }

  code: string;

  nextCsrfToken(): void {
    this.csrfToken = uuid();
  }

  isLoggedIn: boolean = false;

  redirectUrl: string;

  login(username: string, password: string){
    // enquire if logged, if not redirect to login router.
    //this.http.post()
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(){
    this.isLoggedIn = false;
  }

}
