import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthserviceService} from "../../services/authservice.service";

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {


    public submitted: boolean | undefined;
    public id: string | null | undefined;
    public lat: number = 0;
    public lng: number = 0;
    public origin: any;
    public destination: any;
    public orderStatus: string = '';
    public userType: any;
    constructor(private apiService: ApiService,private authService: AuthserviceService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private toastr: ToastrService) { }
    addForm: FormGroup = new FormGroup({});

    ngOnInit(): void {
        this.userType = this.authService.getCookie()
        this.id = this.route.snapshot.paramMap.get('id')
        this.editData();

    }

    editData(){
        let params = {id: this.id};
        this.apiService.getOrderData(params).subscribe( result => {
            if (result.success){
                this.orderStatus = result.data.orderStatus
                if (this.userType){
                    this.lat = result.data.orderLatitude
                    this.lng = result.data.orderLongitude
                }else{
                    this.lat = result.data.createdLatitude
                    this.lng = result.data.createdLongitude
                }

            }
        })
    }
}
