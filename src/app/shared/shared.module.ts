import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuardService} from "./services/auth-guard.service";
import {CategoryService} from "./services/category.service";
import {ProductService} from "./services/product.service";
import {CustomFormsModule} from "ng2-validation";
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuardService,
    CategoryService,
    ProductService,
    CustomFormsModule
  ]
})
export class SharedModule { }
