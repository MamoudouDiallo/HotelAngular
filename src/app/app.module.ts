import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.componet';

registerLocaleData(localFr,'fr');

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }