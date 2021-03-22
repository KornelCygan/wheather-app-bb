import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';

const materialModules = [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatSortModule
];

@NgModule({
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
})
export class MaterialModule {}
