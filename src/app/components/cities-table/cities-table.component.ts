import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICities } from 'src/app/interfaces/cities.interface';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cities-table',
  templateUrl: './cities-table.component.html',
  styleUrls: ['./cities-table.component.scss']
})
export class CitiesTableComponent {
  citiesData$: Observable<ICities>;

  constructor(private appService: AppService) {
    this.citiesData$ = this.appService.getCitiesCurrentState();
  }
}
