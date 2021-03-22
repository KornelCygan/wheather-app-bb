import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockCities } from 'src/app/mock/mock-data';
import { ICities } from '../interfaces/cities.interface';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService]
    });

    service = TestBed.get(AppService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should get data from getCitiesCurrentState method', () => {
    service.getCitiesCurrentState().subscribe((data: ICities) => {
      expect(data.list.length).toBe(1);
    });

    const req = httpMock.expectOne(`https://api.openweathermap.org/data/2.5//group?id=3096472,3094802,2759794,2653822,2925533&units=metric&appId=e26dd6051c70a86da6b5b53b8c6198df`);
    expect(req.request.method).toBe('GET');

    req.flush({
      data : mockCities
    });

    httpMock.verify();
  });
});
