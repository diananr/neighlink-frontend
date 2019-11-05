import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListViewComponent } from './user-list-view/user-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: UserListViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
