import { Component, OnDestroy, OnInit } from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import { Subscription } from "rxjs/Rx";
import {AuthService} from '../../shared/auth.service';
import {Uuid} from "../../shared/uuid-generator.service";

@Component({
  selector: 'user-home',
  templateUrl: 'login-github.component.html'
})
export class LoginGithubComponent implements OnInit, OnDestroy {
  private errorMessage;
  private isSuccess: boolean = false;
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
        this.auth.loginWithGithub(state, code).subscribe(data => {
          var result = data.json();
          this.auth.user.name = result.name;
          this.auth.user.email = result.email;
          this.auth.user.hasPassword = result.hasPassword;
          this.auth.user.isLoggedIn = true;
          this.isSuccess = true;
        }, (err) => {
          this.errorMessage = err;
        });
      }
    });
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }

  }
}
