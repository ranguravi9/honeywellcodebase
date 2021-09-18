import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthserviceService} from "./authservice.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class JwtserviceService implements HttpInterceptor {

  constructor(private authService: AuthserviceService, private router: Router) { }

  // @ts-ignore
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === "http://localhost:3000/admin/login"){
      return next.handle(req);
    }else if(req.url === 'http://54.191.254.66:3001/admin/login') {
      return next.handle(req);
    }else{
      let cookie = this.authService.getCookie();
      if (cookie) {
        let request = req.clone({
          setHeaders: {
            Authorization: `Bearer ${cookie}`
          }
        });
        return next.handle(request);
      } else {
      window.location.href = "/login";
    }
    }
  }
}
