import {Injectable} from '@angular/core';
/**
 * Created by yezm on 12/08/2016.
 */
@Injectable()
export class Uuid{
  newUuid(){
    if (typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
      // If we have a cryptographically secure PRNG, use that
      // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
      var buf = new Uint16Array(8);
      window.crypto.getRandomValues(buf);
      return (this.S4(buf[0]) + this.S4(buf[1]) + "-" + this.S4(buf[2]) + "-" + this.S4(buf[3]) + "-" + this.S4(buf[4]) + "-" + this.S4(buf[5]) + this.S4(buf[6]) + this.S4(buf[7]));
    }
    else {
      // Otherwise, just use Math.random
      // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
      // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code

      return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" +
        this.s4() + "-" + this.s4() + this.s4() + this.s4();
    }
  }

  private S4(num){
    var ret = num.toString(16);
    while (ret.length < 4) {
      ret = "0" + ret;
    }
    return ret;
  }

  private s4(){
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
