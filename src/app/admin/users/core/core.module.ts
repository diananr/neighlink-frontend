import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './components/user-table/user-table.component';

@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserTableComponent
  ]
})
export class CoreModule { }
