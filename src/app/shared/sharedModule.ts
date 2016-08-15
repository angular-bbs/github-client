/**
 * Created by yezm on 15/08/2016.
 */

import {NgModule, ModuleWithProviders} from '@angular/core';
import {AuthService} from './auth.service';
import {CommonModule} from '@angular/common';
import {HttpModule, JsonpModule, RequestOptions} from '@angular/http';
import {BaseRequestOptionWithCredentials} from './base-request-options-withcredential';
import {AuthGuardService} from './auth-guard.service';
import {ValidationMessages} from './validation-messages.component';
import {ValidationService} from './validation.service';
import {SEMANTIC_COMPONENTS, SemanticCardComponent, SemanticTabComponent, SemanticInputComponent} from 'ng-semantic';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,

  ],
  declarations: [
    ValidationMessages
  ],
  exports: [
    CommonModule,
    HttpModule,
    JsonpModule,
    ValidationMessages
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        AuthGuardService,
        ValidationService,
        {provide: RequestOptions, useClass: BaseRequestOptionWithCredentials}
      ]
    };
  }
}
