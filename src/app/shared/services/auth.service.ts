import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {GoogleAuthProvider} from "@firebase/auth";
import {Observable, switchMap} from "rxjs";
import * as firebase from "firebase/compat";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "./user.service";
import {AppUser} from "../models/AppUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User | null>

  constructor(private angularFireAuth: AngularFireAuth,
              private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
    this.user$=angularFireAuth.authState
  }

  login() {
    this.angularFireAuth.signInWithRedirect(new GoogleAuthProvider())
  }

  logout() {
    this.angularFireAuth.signOut()
    this.router.navigateByUrl('/login')
  }

  get appUser$() : Observable<AppUser> {
    return this.user$.pipe(switchMap(user => {
      if (user)
        return this.userService.get(user.uid)

      return new Observable<AppUser>()
    }))
  }
}
