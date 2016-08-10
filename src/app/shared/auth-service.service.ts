import { Injectable } from '@angular/core';
import * as uuid from "uuid";
@Injectable()
export class AuthService {

  constructor() {
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

}
