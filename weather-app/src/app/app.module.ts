

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app.routes'; 
import { FormsModule } from '@angular/forms'; 
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-details/city-details.component';
import { AddCityComponent } from './add-city/add-city.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    
    CityListComponent,
    CityDetailComponent,
    AddCityComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
