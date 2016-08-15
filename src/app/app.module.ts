import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AppComponent } from './app.component';
import {appRoutingProviders, routing} from './app.routing';
import {UserModule} from './user/user.module';
import {SharedModule} from './shared/sharedModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    SharedModule.forRoot(),
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
