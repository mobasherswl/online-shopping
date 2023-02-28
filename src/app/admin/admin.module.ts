import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import {AdminAuthGuardService} from "./service/admin-auth-guard.service";
import { ProductFormComponent } from './components/product-form/product-form.component';
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {CustomFormsModule} from "ng2-validation";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
    imports: [
        CommonModule,
        RouterLink,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        CustomFormsModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        MatListModule,
        MatSortModule,
        MatPaginatorModule
    ],
  providers: [
    AdminAuthGuardService
  ]
})
export class AdminModule { }
