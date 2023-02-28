import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminProductsComponent} from "./components/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./components/admin-orders/admin-orders.component";
import {AuthGuardService} from "../shared/services/auth-guard.service";
import {AdminAuthGuardService} from "./service/admin-auth-guard.service";
import {ProductFormComponent} from "./components/product-form/product-form.component";

const routes: Routes = [
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
