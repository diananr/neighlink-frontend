import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { ViewsRoutingModule } from './views-routing.module';
import { PollListViewComponent } from './poll-list-view/poll-list-view.component';


@NgModule({
  declarations: [PollListViewComponent],
  imports: [
    CommonModule,
    CoreModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
