import { ICities } from '../interfaces/cities.interface';
import { ICity } from '../interfaces/city.interface';

export const mockCity: ICity = {
  name: 'mock input city',
  main: {
    temp: 13,
  },
  wind: {
    speed: 123,
  },
  coord: {
    lat: 123,
    lon: 123,
  },
};

export const mockCities: ICities = {
  cnt : 1,
  list: [mockCity]
};
