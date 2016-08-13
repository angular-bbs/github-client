import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {appRoutingProviders, routing} from './app.routing';
import {HttpModule, JsonpModule, RequestOptions} from '@angular/http';
import {AuthService} from './shared/auth.service';
import {UserModule} from './user/user.module';
import {BaseRequestOptionWithCredentials} from "./shared/base-request-options-withcredential";
import {AuthGuardService} from "./shared/auth-guard.service";
import {Uuid} from './shared/uuid-generator.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    UserModule,
    routing
  ],
  providers: [
    appRoutingProviders, AuthService, AuthGuardService, Uuid,
    {provide: RequestOptions, useClass: BaseRequestOptionWithCredentials}
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
