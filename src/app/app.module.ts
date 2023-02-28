import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {environment} from "../environments/environment";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {CoreModule} from "./core/core.module";
import {ShoppingModule} from "./shopping/shopping.module";
import {ShoppingRoutingModule} from "./shopping/shopping-routing.module";
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {CoreRoutingModule} from "./core/core-routing.module";
import {SharedModule} from "./shared/shared.module";
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    CoreModule,
    CoreRoutingModule,
    ShoppingRoutingModule,
    AdminRoutingModule,
    SharedModule,
    ShoppingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
