import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {CheckOutComponent} from "./components/check-out/check-out.component";
import {OrderSuccessComponent} from "./components/order-success/order-success.component";
import {MyOrdersComponent} from "./components/my-orders/my-orders.component";
import {AuthGuardService} from "../shared/services/auth-guard.service";

const routes: Routes = [
  { path: '', component: ProductsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent},
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
