import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren:() => import('src/app/admin/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren:() => import('src/app/admin/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'bills',
        loadChildren:() => import('src/app/admin/bills/bills.module').then(m => m.BillsModule)
      },
      {
        path: 'payments',
        loadChildren:() => import('src/app/admin/payments/payments.module').then(m => m.PaymentsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
