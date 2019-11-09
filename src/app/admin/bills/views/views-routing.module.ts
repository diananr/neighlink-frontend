import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillListViewComponent } from './bill-list-view/bill-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: BillListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
