/**
 * Created by yezm on 14/08/2016.
 */
import {Component, Input} from "@angular/core";
@Component({
  selector: 'confirmation',
  templateUrl: 'confirmation.component.html'
})

export class ConfirmationComponent{
  @Input() isSuccess;
}
