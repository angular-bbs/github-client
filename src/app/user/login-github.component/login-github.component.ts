import { Component, OnDestroy, OnInit } from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { Http } from "@angular/http";
import {AuthService} from '../../shared/auth.service';
import {api} from "../shared/api.const";
import {Uuid} from "../../shared/uuid-generator.service";

@Component({
  selector: 'user-home',
  templateUrl: 'login-github.component.html'
})
export class LoginGithubComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router, private uuid: Uuid) {
  }

  name: string;

  private sub: Subscription;

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe((params: {code: string, state: string})=> {
      const state = params.state;
      const code = params.code;
      if (!state && !code) {
        return this.router.navigateByUrl('/user-center');
      }
      if (decodeURIComponent(state) !== this.uuid.csrfToken) {
        alert('State code not matching!');
      } else {
        this.auth.loginWithGithub(state, code);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
