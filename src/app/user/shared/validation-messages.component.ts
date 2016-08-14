/**
 * Created by yezm on 14/08/2016.
 */
import {Component, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ValidationService} from './validation.service';

@Component({
  selector: 'validation-messages',
  template: `<div class="warning" *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
  styles: [`
  .warning{
    color: indianred;
    }
    `]
})
export class ValidationMessages {
  @Input() control: FormControl;

  constructor() {
  }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && !this.control.pristine) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
