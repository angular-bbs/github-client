import {BaseRequestOptions, Headers} from "@angular/http";
/**
 * Created by yezm on 11/08/2016.
 */

export class BaseRequestOptionWithCredentials extends BaseRequestOptions{
  constructor(){
    super();
    this.withCredentials = true;
  }
}
