/**
 * Created by yezm on 14/08/2016.
 */
import {Component, Input} from "@angular/core";
@Component({
  selector: 'error-message',
  templateUrl: 'error-message.component.html'
})

export class ErrorMessageComponent{
  @Input() errorMessage;
}
