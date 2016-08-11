import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {appRoutingProviders, routing} from './app.routing';
import {HttpModule, JsonpModule} from '@angular/http/esm';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {AuthService} from './shared/auth.service';
import {UserModule} from './user/user.module';

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
    appRoutingProviders, AuthService, Http, HTTP_PROVIDERS
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
