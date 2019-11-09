import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ViewsRoutingModule } from './views-routing.module';
import { BillListViewComponent } from './bill-list-view/bill-list-view.component';

@NgModule({
  declarations: [
    BillListViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
