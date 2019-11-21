import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { UserService } from './user.service';
import { BillService } from './bill.service';
import { PaymentService } from './payment.service';
import { PollService } from './poll.service';
import { BuildingService } from './building.service';
import { AuthService } from './auth.service';
import { CondominiumService } from './condominium.service'
import { PaymentCategoryService } from './payment-category.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ApiService,
    UserService,
    BillService,
    PaymentService,
    PollService,
    BuildingService,
    AuthService,
    CondominiumService,
    PaymentCategoryService
  ]
})
export class ServicesModule { }
