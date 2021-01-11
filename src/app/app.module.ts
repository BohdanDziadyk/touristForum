import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)},
      {path: 'users',  loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
      {path: 'places', loadChildren: () => import('./place/place.module').then(m => m.PlaceModule)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
