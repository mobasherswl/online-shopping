import {Component, OnDestroy} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {CategoryService} from "../../../shared/services/category.service";
import {GenericModel} from "../../../shared/models/GenericModel";
import {Category} from "../../../shared/models/Category";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../shared/models/Product";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy{

  products:GenericModel<Product>[]=[];
  filteredProducts:GenericModel<Product>[]=[]
  categories$
  productSubscription:Subscription
  category:string|null
  constructor(private productService:ProductService,
              private categoryService:CategoryService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {
    this.category=this.activatedRoute.snapshot.queryParamMap.get('category')
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.category=params.get('category')
      this.filterProducts()
    })
    this.productSubscription=this.productService.getAll().subscribe(products => {
      this.products=products
      this.filterProducts()
    })
    this.categories$=this.categoryService.getAll()
  }

  filterProducts() {
    if (this.category) {
      this.filteredProducts=this.products.filter(p => {
        return p.model.category===this.category
      })
    } else {
      this.filteredProducts=this.products
    }
  }

  selectCategory(c: GenericModel<Category>|null) {
    this.router.navigate(['/'], c ? {queryParams: {category: c.id}}:{})
  }

  selected(c: GenericModel<Category>):boolean {
    return c && this.category != null && c.id===this.category;
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe()
  }
}
