import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockCities } from 'src/app/mock/mock-data';
import { AppService } from 'src/app/services/app.service';

import { CitiesTableComponent } from './cities-table.component';

describe('CitiesTableComponent', () => {
  let component: CitiesTableComponent;
  let fixture: ComponentFixture<CitiesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesTableComponent ],
      imports: [HttpClientTestingModule],
      providers: [AppService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesTableComponent);
    component = fixture.componentInstance;
    component.citiesData$ = of(mockCities);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init citiesData$ observable', () => {
    expect(component.citiesData$).not.toBeUndefined();
  });
});
