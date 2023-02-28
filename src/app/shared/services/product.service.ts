import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {map, Observable} from "rxjs";
import {GenericModel} from "../models/GenericModel";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any) {
    this.db.list('/products').push(product)
  }

  getAll() {
    return this.db.list('/products')
      .snapshotChanges()
      .pipe(
        map(catArr =>
          catArr.map(cat => ({id: cat.key, model: cat.payload.val()}) as GenericModel<Product>)
        ))
  }

  get(id: string) {
    return this.db.object('/products/'+id) as any
  }

  update(id:string, product:any) {
    return this.db.object('/products/'+id).update(product)
  }

  delete(id:string) {
    return this.db.object('/products/'+id).remove()
  }
}
