import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CityForecastComponent } from './city-forecast.component';

describe('CityForecastComponent', () => {
  let component: CityForecastComponent;
  let fixture: ComponentFixture<CityForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityForecastComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCityForecast method onInit', () => {
    spyOn(component, 'getCityForecast');

    component.ngOnInit();

    expect(component.getCityForecast).toHaveBeenCalled();
  });

  it('goBack method should call location back', () => {
    spyOn(component.location, 'back');

    component.goBack();

    expect(component.location.back).toHaveBeenCalled();
  });

  it('should round temperature', () => {
    expect(component.roundTemperature(12.33)).toEqual(12);
  });

  it('should convert to human readable time', () => {
    expect(component.getCityTime(1616349600)).toEqual('19:00:00');
  });
});
