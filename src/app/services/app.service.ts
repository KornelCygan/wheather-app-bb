import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';
import { Cities } from '../enums/cities.enum';
import { ICities } from '../interfaces/cities.interface';

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
}
