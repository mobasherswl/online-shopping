import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import * as firebase from "firebase/compat";
import {AppUser} from "../models/AppUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  save (user: firebase.default.User) {
    this.db.object('/users/'+user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }

  get(uid:string): Promise<AppUser> {
    return this.db.database.ref('/users/'+uid).once("value").then(value => value.val() as AppUser)
  }
}
