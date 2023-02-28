import {Component} from '@angular/core';
import {CategoryService} from "../../../shared/services/category.service";
import {ProductService} from "../../../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {take} from "rxjs";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;
  product: any = {};
  id;

  constructor(categoryService: CategoryService,
              private productService: ProductService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
    this.categories$ = categoryService.getAll()
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    if (this.id) {
      this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe((value: any) => {
        if (value){this.product = value}
      })
    }
  }

  save(product: any) {
    if (this.id) {
      this.productService.update(this.id, product)
    } else {
      this.productService.create(product)
    }
    this.router.navigateByUrl('/admin/products')
  }

  delete() {
    if (this.id) {
      this.productService.delete(this.id)
      this.router.navigateByUrl('/admin/products')
    }
  }
}
