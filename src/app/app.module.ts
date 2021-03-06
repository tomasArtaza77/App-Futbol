import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BocaComponent } from './boca/boca.component';
import { RiverComponent } from './river/river.component';
import { BackgroundComponent } from './background/background.component';
import { ArgentinaComponent } from './argentina/argentina.component';

@NgModule({
  declarations: [
    AppComponent,
    BocaComponent,
    RiverComponent,
    BackgroundComponent,
    ArgentinaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
