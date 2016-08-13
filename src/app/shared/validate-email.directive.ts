import {provide, Directive, forwardRef} from '@angular/core';
import {Control, NG_VALIDATORS} from '@angular/common';

export class CustomValidators {
  static validateEmailFactory() {//emailBlackList: EmailBlackList) {
    return (c: Control) => {
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
          valid: false
        }
      };
    };
  }
}
// function validateEmailFactory(){//emailBlackList: EmailBlackList) {
//     return (c: Control) => {
//         let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
//
//         return EMAIL_REGEXP.test(c.value) ? null : {
//             validateEmail: {
//                 valid: false
//             }
//         };
//     };
// }

@Directive({
  selector: '[validateEmail][ngControl],[validateEmail][ngModel],[validateEmail][ngFormControl]',
  providers: [
    provide(NG_VALIDATORS, {
      useExisting: forwardRef(() => EmailValidator),
      multi: true
    })
  ]
})
export class EmailValidator {

  validator: Function;

  constructor() {//emailBlackList: EmailBlackList) {
    this.validator = CustomValidators.validateEmailFactory();//emailBlackList);
  }

  validate(c: Control) {
    return this.validator(c);
  }
}
