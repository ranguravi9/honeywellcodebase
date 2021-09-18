import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public users: any;
  constructor(private apiservice: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
      this.getUsers();
  }

    getUsers(){
        this.apiservice.getUsers().subscribe((res) => {
            if (res['data'] != null) {
                this.users = res['data'];
                console.log(this.users)
            } else {
                this.toastr.error('something went wrong');
            }
        });
    }
}
