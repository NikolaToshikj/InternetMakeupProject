// city-list.component.ts

import { Component, OnInit } from '@angular/core';
import { CityService } from '../city-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class CityListComponent implements OnInit {
  cities: any[] = [];
  temperatureUnit: string = 'Celsius';

  constructor(private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe((cities) => {
      this.cities = cities;
    });
  }

  toggleTemperatureUnit(): void {
    this.temperatureUnit =
      this.temperatureUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius';
  }

  removeCity(cityId: string): void {
    const isConfirmed = window.confirm('Are you sure you want to remove this city?');

    if (isConfirmed) {
      this.cityService.removeCity(cityId);
    }
  }

  navigateToCity(cityId: string): void {
    this.router.navigate(['/city', cityId]);
  }


}
