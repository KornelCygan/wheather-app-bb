import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICityForecast } from 'src/app/interfaces/city-forecast.interface';
import { AppService } from 'src/app/services/app.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss']
})
export class CityForecastComponent implements OnInit {
  cityForecastData$!: Observable<ICityForecast>;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    public location: Location,
    ) { }

  ngOnInit(): void {
    this.getCityForecast();
    this.cityForecastData$.subscribe(x => console.log(x))
  }

  getCityForecast(): void {
    const cityName: string = this.route.snapshot.params.name;
    this.cityForecastData$ = this.appService.getCityForecast(cityName);
  }

  getCityTime(stamp: number): string {
    return new Date(stamp * 1000).toLocaleTimeString('pl-PL');
  }

  goBack(): void {
    this.location.back();
  }

  roundTemperature(temp: number): number {
    return Math.round(temp);
  }
}
