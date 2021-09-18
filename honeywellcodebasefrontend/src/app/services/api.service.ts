import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverurl = environment.apiURL;

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
     return this.http.post(this.serverurl + 'login', data);
   }

  getUsers(): Observable<any> {``
    return this.http.get(this.serverurl + 'get-users');
  }

  getUserDetails(params = {}): Observable<any> {
      return this.http.post(this.serverurl + 'get-user-details', {params:params});
  }

  getOrders(): Observable<any> {``
      return this.http.get(this.serverurl + 'orders');
  }

    getOrderData(params = {}): Observable<any> {``
        return this.http.get(this.serverurl + 'get-order',{params:params});
    }

    UpdateOrderDetails(params = {}): Observable<any> {``
        return this.http.get(this.serverurl + 'update-order');
    }
}
