import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {map, Observable} from "rxjs";
import {GenericModel} from "../models/GenericModel";
import {Category} from "../models/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories')
      .snapshotChanges()
      .pipe(
        map(catArr =>
          catArr.map(cat => ({id: cat.key, model: cat.payload.val()}) as  GenericModel<Category>)
        ))
  }
}
