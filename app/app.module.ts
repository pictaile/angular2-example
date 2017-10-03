import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CommonModule } from '@angular/common';

import { routing } from './app.routing';

/*components*/
import { MainComponent }  from './main.component';
import { BaseComponent }  from './base/base.component';
import { HomeComponent }  from './home/home.component';
import { AboutComponent }  from './about/about.component';



import { AuthComponent }  from './auth/auth.component';
import { AuthService }  from './auth/auth.service';

import { User } from './auth/user'





//moment.locale('ru');

//$().jSnow();

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    FormsModule,
    routing,

  ],
  declarations: [
    AuthComponent,

    MainComponent,
    BaseComponent,
    AboutComponent,
    HomeComponent

  ],
  providers: [
    AuthService,
    User
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }