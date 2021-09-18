import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthserviceService} from "../services/authservice.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiService,
              private authService: AuthserviceService,
              private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    console.log('hi')
  }

    onSubmit(form: NgForm){
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        const dataObj = {email: email, password: password};
        // for affiliate
        this.apiService.login(dataObj).subscribe(result => {
            debugger
            if (result.success === true) {
                if (result.data.token) {
                    this.authService.deleteCookie();
                    this.authService.setCookie(result.data);

                    this.router.navigate(['/dashboard/users']);
                }
            } else if (result.success === false) {
                this.toastr.error(result.message,'Error');
            }

        }, error => {
            console.log('error', error);
            this.toastr.error(error.error.message,'Error');
        });
    }

}
