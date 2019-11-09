import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentListViewComponent } from './payment-list-view/payment-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
