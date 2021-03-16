import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';

import { ArgentinaComponent } from './argentina/argentina.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = []; // sets up routes constant where you define your routes

@NgModule({

  declarations: [	
    AppComponent,
    ArgentinaComponent,
    FirstComponent,
    SecondComponent,

   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
 

})
export class AppModule { }
export class AppRoutingModule { } 

