import { Component, Input } from '@angular/core';
import { ICity } from 'src/app/interfaces/city.interface';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})

export class CityCardComponent {
  @Input()
  city!: ICity;

  roundTemperature(temp: number): number {
    return Math.round(temp);
  }
}
