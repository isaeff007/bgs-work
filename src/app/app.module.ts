import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {CarouselModule, ButtonModule, DropdownModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MonthlyComponent } from './monthly/monthly.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    CarouselModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
]

})
export class AppModule { }
