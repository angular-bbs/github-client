import { Component, OnDestroy, OnInit } from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { Http } from "@angular/http";
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'user-home',
  templateUrl: 'login-github.component.html'
})
export class LoginGithubComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private auth: AuthService, private http: Http, private router: Router) {
  }

  name: string;

  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe((params: {code: string, state: string})=> {
      const state = params.state;
      const code = params.code;
      if (!state && !code) {
        return this.router.navigateByUrl('/bbs');
      }
      if (decodeURIComponent(state) !== this.auth.csrfToken) {
        alert('State code not matching!');
      } else {
        this.http.post('https://localhost:44396/api/account/login-github', {
          state: state,
          code: code,
          redirect_url: this.router.serializeUrl(this.router.createUrlTree(['/bbs/user/home']))
        }).subscribe((data)=> {
          this.name = data.json().name;
          console.log(data);
        }, (err)=> {
          console.error(err);
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
