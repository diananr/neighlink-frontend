import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ViewsRoutingModule } from './views-routing.module';

import { UserListViewComponent } from './user-list-view/user-list-view.component';

@NgModule({
  declarations: [
    UserListViewComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule { }
