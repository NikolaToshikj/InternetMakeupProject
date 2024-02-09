// city-service.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private citiesUrl = 'assets/places.json';
  private citiesSubject = new BehaviorSubject<any[]>([]);
  cities$: Observable<any[]> = this.citiesSubject.asObservable();

  constructor(private http: HttpClient) { }

  getCities(): Observable<any[]> {
    return this.http.get<any>(this.citiesUrl)
      .pipe(
        map((data) => data.cities)
      );
  }

  addCity(city: any): void {
    const currentCities = this.citiesSubject.value;
    const updatedCities = [...currentCities, city];
    this.citiesSubject.next(updatedCities);
  }

 
  getCityById(cityId: string): any {
    const currentCities = this.citiesSubject.value;
    return currentCities.find((city) => city.id === cityId);
  }


  updateCity(updatedCity: any): void {
    const currentCities = this.citiesSubject.value;
    const index = currentCities.findIndex((city) => city.id === updatedCity.id);

    if (index !== -1) {
      const updatedCities = [...currentCities];
      updatedCities[index] = updatedCity;
      this.citiesSubject.next(updatedCities);
    }
  }

  removeCity(cityId: string): void {
    const currentCities = this.citiesSubject.value;
    const updatedCities = currentCities.filter((city) => city.id !== cityId);
    this.citiesSubject.next(updatedCities);
  }
}


