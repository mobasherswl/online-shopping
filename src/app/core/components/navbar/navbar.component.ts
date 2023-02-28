import { Component } from '@angular/core';
import {AuthService} from "../../../shared/services/auth.service";
import {AppUser} from "../../../shared/models/AppUser";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  appUser:AppUser|null=null

  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(user => this.appUser=user)
  }

  logout() {
    this.appUser=null
    this.authService.logout()
  }
}
