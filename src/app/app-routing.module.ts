import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesTableComponent } from './components/cities-table/cities-table.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: CitiesTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
