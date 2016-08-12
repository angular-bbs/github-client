import {Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Http} from '@angular/http';
import {Uuid} from './uuid.service';
import {api} from '../user/shared/api.const';
@Injectable()
export class AuthService {

  constructor(private http: Http, private uuid: Uuid) {
    if (!this.csrfToken) {
      this.nextCsrfToken();
    }
  }

  get csrfToken(): string {
    var uuid= sessionStorage.getItem('csrfToken');
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

  sub: Subscription;

  login(username: string, password: string) {
    // enquire if logged, if not redirect to login router.
    //this.http.post()
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout() {
    this.isLoggedIn = false;
  }

  checkStatus(){
    this.sub = this.http.get(api.checkStatusEndpoint).subscribe(d => {
      console.log(d);
      this.sub.unsubscribe();
      if (!!d) {
        this.username = null;
        return null;
      }
      if (d.ok) {
        this.username = d.json().name;
      }
    });
  }


}
