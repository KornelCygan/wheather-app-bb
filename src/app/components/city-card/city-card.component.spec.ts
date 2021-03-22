import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockCity } from 'src/app/mock/mock-data';
import { CityCardComponent } from './city-card.component';

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCardComponent ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;
    component.city = mockCity;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should round temperature', () => {
    expect(component.roundTemperature(12.33)).toEqual(12);
  });
});
