import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { Payment } from '../../../../../core/models/payment.model';

const ELEMENT_DATA: Payment[] = [
  {id:1,  date: '29/03/2019', amount: 450.20, user: 'Hydrogen', bill: 'Agua Marzo 2019'},
  {id:2,  date: '29/03/2019', amount: 450.89, user: 'Helium', bill: 'Luz Marzo 2019'},
  {id:3,  date: '18/02/2019', amount: 450.89, user: 'Lithium', bill: 'Agua Marzo 2019'},
  {id:4,  date: '29/02/2019', amount: 500.20, user: 'Beryllium', bill:'Luz Marzo 2019'},
  {id:5,  date: '29/02/2019', amount: 450.89, user: 'Boron', bill: 'Luz Marzo 2019'},
  {id:6,  date: '29/02/2019', amount: 500.89, user: 'Carbon', bill: 'Luz Marzo 2019'},
  {id:7,  date: '29/03/2019', amount: 450.20, user: 'Nitrogen', bill: 'Agua Febrero 2019'},
  {id:8,  date: '18/02/2019', amount: 450.89, user: 'Oxygen', bill: 'Agua Marzo 2019'},
  {id:9,  date: '18/03/2019', amount: 500.89, user: 'Fluorine', bill: 'Agua Marzo 2019'},
  {id:10, date: '29/02/2019', amount: 500.89, user: 'Neon', bill: 'Luz Marzo 2019'},
  {id:11, date: '29/03/2019', amount: 450.89, user: 'Sodium', bill: 'Luz Marzo 2019'},
  {id:12, date: '29/02/2019', amount: 500.89, user: 'Magnesium', bill: 'Agua Marzo 2019'},
  {id:13, date: '18/02/2019', amount: 450.89, user: 'Aluminum', bill: 'Agua Marzo 2019'},
  {id:14, date: '29/02/2019', amount: 420.89, user: 'Silicon', bill: 'Luz Febrero 2019'},
  {id:15, date: '18/02/2019', amount: 450.89, user: 'Phosphorus', bill: 'Agua Febrero 2019'},
  {id:16, date: '29/02/2019', amount: 450.89, user: 'Sulfur', bill: 'Agua Febrero 2019'},
  {id:17, date: '29/03/2019', amount: 450.20, user: 'Chlorine', bill: 'Luz Febrero 2019'},
  {id:18, date: '03/02/2019', amount: 450.89, user: 'Argon', bill: 'Luz Febrero 2019'},
  {id:19, date: '29/02/2019', amount: 450.89, user: 'Potassium', bill: 'Agua Marzo 2019'},
  {id:20, date: '29/02/2019', amount: 450.89, user: 'Calcium', bill: 'Agua Marzo 2019'},
];

@Component({
  selector: 'payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss']
})
export class PaymentTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'bill', 'user', 'amount', 'date', 'status', 'options'];
  dataSource = new MatTableDataSource<Payment>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentFormComponent, {
      width: '50%',
      data: {
        type: 'create',
        info: null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.status) console.log('update list')
    });
  }
}
