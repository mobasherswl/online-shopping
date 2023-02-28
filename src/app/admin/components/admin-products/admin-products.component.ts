import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {Subscription} from "rxjs";
import {Product} from "../../../shared/models/Product";
import {GenericModel} from "../../../shared/models/GenericModel";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy, AfterViewInit {

  displayedColumns = ['model.title', 'price', 'col']
  products: GenericModel<Product>[] = []
  filteredProducts: GenericModel<Product>[] = []
  productSubscription: Subscription;
  datasource = new MatTableDataSource(this.filteredProducts)
  @ViewChild(MatSort) sort: MatSort | null
  @ViewChild(MatPaginator) paginator: MatPaginator | null;

  constructor(private productService: ProductService) {
    this.paginator = null
    this.sort = null
    this.productSubscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products
      this.datasource.data = this.filteredProducts
    })
  }

  filter(query: string) {
    this.filteredProducts = query ?
      this.products.filter(p => p.model.title.toLowerCase().includes(query.toLowerCase())) : this.products
    this.datasource.data = this.filteredProducts
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe()
  }

  ngAfterViewInit(): void {
    this.datasource.sort = this.sort
    this.datasource.paginator = this.paginator
    this.datasource.sortingDataAccessor = (row: GenericModel<Product>, columnName: string): string => {

      if (columnName == "model.title") return row.model.title;
      var columnValue = row[columnName as keyof GenericModel<Product>] as string;
      return columnValue;

    }
  }
}
