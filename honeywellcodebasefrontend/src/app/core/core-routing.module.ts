import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {OrdersComponent} from "./orders/orders.component";
import {EditOrderComponent} from "./edit-order/edit-order.component";

const routes: Routes = [
    {path : 'users', component : UsersComponent},
    {path : 'orders', component : OrdersComponent},
    {path : 'edit-order/:id', component : EditOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
