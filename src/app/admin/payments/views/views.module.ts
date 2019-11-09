import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ViewsRoutingModule } from './views-routing.module';
import { PaymentListViewComponent } from './payment-list-view/payment-list-view.component';

@NgModule({
  declarations: [
  PaymentListViewComponent],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule { }
