import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    public orders: any;
    constructor(private apiservice: ApiService, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.getOrders();
    }

    getOrders(){
        this.apiservice.getOrders().subscribe((res) => {
            if (res['data'] != null) {
                this.orders = res['data'];
                console.log(this.orders)
            } else {
                this.toastr.error('something went wrong');
            }
        });
    }

}
