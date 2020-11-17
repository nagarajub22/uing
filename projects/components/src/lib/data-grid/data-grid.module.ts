import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid.component';
import { DataGrid } from './data-grid.service';



@NgModule({
  declarations: [DataGridComponent],
  imports: [
    CommonModule
  ],
  providers: [
    DataGrid
  ]
})
export class DataGridModule { }
