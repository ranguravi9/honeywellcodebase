import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor( private router: Router) { }

  setCookie(data: any) {
    document.cookie = `jwt=${data.token}`;
      document.cookie = `userType=${data.user.userType}`;
  }

  deleteCookie() {
      document.cookie = "jwt=invalid;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }


  getCookie() {
    let ca: Array<string> = document.cookie.split(';');
    let obj:any;
    if (ca.length >= 1) {
      for (var i = 0; i < ca.length; i++) {
        const userDetails = ca[i].replace(/^\s+/g, '');
        const key = userDetails.substring(0, userDetails.indexOf("=") );
        if (key == 'userType'){
            return userDetails.substring(userDetails.indexOf("=") + 1, userDetails.length);
        }
      }
    } else {
      this.logout();
    }
    return '';
  }


  logout() {
    this.deleteCookie();
    this.router.navigate(['/login']);
  }
}
