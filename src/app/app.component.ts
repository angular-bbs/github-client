import { Component } from '@angular/core';
import {AuthService} from './shared/auth.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers:[AuthService]
})
export class AppComponent {
  title = 'app works!';
  constructor(private auth: AuthService){

  }
}
