import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesTableComponent } from './components/cities-table/cities-table.component';
import { CityForecastComponent } from './components/city-forecast/city-forecast.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: CitiesTableComponent },
  { path: 'city/:name', component: CityForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
