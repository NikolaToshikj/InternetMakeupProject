import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-details/city-details.component';
import { AddCityComponent } from './add-city/add-city.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'cities', component: CityListComponent },
  { path: 'city/:id', component: CityDetailComponent },
  { path: 'add-city', component: AddCityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
