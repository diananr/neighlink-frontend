import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollListViewComponent } from './poll-list-view/poll-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: PollListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
