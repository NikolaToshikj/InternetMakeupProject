// add-city.component.ts

import { Component } from '@angular/core';
import { CityService } from '../city-service.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
})
export class AddCityComponent {
  newCity: any = {};

  constructor(private cityService: CityService) { }

  addCity(): void {
    this.cityService.addCity(this.newCity);
    // Optionally, you can perform additional actions after adding the city
    console.log('City added successfully');
    this.newCity = {}; // Clear the form
  }
}
