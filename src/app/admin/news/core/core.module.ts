import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTableComponent } from './components/new-table/new-table.component';
import { NewFormComponent } from './components/new-form/new-form.component';



@NgModule({
  declarations: [NewTableComponent, NewFormComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
