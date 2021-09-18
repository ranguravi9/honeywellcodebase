import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { CoreRoutingModule } from './core-routing.module';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import {AgmCoreModule} from "@agm/core";
import { AgmDirectionModule } from 'agm-direction';
import { environment } from './../../environments/environment';
@NgModule({
  declarations: [
    UsersComponent,
    OrdersComponent,
    EditOrderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      AgmCoreModule.forRoot({
          apiKey: environment.apiKey
      }),
      AgmDirectionModule
  ]
})
export class CoreModule { }
