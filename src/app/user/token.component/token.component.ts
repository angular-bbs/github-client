/**
 * Created by yezm on 11/08/2016.
 */

import {Component, OnInit, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {Subscription} from 'rxjs';
import {api} from '../shared/api.const';
@Component({
  selector: 'token',
  template: `<div>{{token}}</div>`
})

export class TokenComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
    this.subscription = this.http.get(api.tokenEndpoint).subscribe(data => this.token = data.json());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  constructor(private http: Http){

  }

  token: string;
  subscription:Subscription;

}
