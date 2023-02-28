import {Component} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "./shared/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) {
    authService.user$.subscribe(user => {
      let returnUrl = router.parseUrl(router.url).queryParamMap.get('returnUrl');
      if (!user) return;
      userService.save(user)
      if (!returnUrl) return;
      router.navigateByUrl(returnUrl as string)
    })
  }
}
