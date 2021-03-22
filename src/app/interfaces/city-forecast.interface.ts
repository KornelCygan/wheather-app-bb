import { IWeather } from './weather.interface';

export interface ICityForecast {
    hourly: IWeather[];
}
