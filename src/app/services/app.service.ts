import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';
import { Cities } from '../enums/cities.enum';
import { ICities } from '../interfaces/cities.interface';
import { ICityForecast } from '../interfaces/city-forecast.interface';
import { ICity } from '../interfaces/city.interface';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = 'e26dd6051c70a86da6b5b53b8c6198df';

  private citiesIds = [Cities.Katowice, Cities.Krakow, Cities.Amsterdam, Cities.Cardiff, Cities.Frankfurt].join(',');

  getCitiesCurrentState(): Observable<ICities> {
    return this.http.get<ICities>(`${this.apiUrl}/group?id=${this.citiesIds}&units=metric&appId=${this.apiKey}`).pipe(
      catchError(error => of(error))
    );
  }

  getCityForecast(city: string): Observable<ICityForecast> {
    return this.http.get<ICity>(`${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}`).pipe(
      tap(x => console.log(this.citiesIds)),
      filter(city => !!city.coord),
      switchMap(data => {
        return this.http.get<ICityForecast>(`${this.apiUrl}/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely,daily&units=metric&appid=${this.apiKey}`);
      }),
      catchError(error => of(error))
    );
  }
}
