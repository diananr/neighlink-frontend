import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { BillFormComponent } from '../bill-form/bill-form.component';
import { Bill } from '../../../../../core/models/bill.model';

const ELEMENT_DATA: Bill[] = [
  {id: 1, title:'Pago Agua  Marzo 2019',building: 'Los girasoles',type: 'Agua', amount: 900.50, date: '29/10/2019'},
  {id: 2, title:'Pago Agua  Marzo 2019',building: 'Los jazminess',type: 'Agua', amount: 900.50, date: '29/10/2019'},
  {id: 3, title:'Pago Agua  Marzo 2019',building: 'Los girasoles',type: 'Agua', amount: 900.50, date: '29/10/2019'},
  {id: 4, title:'Pago Agua  Marzo 2019',building: 'Los jazminess',type: 'Ber', amount: 900.50, date: '29/10/2019'},
  {id: 5, title:'Pago Agua  Marzo 2019',building: 'Los girasoles',type: 'Bor', amount: 900.50, date: '29/10/2019'},
  {id: 6, title:'Pago Agua  Marzo 2019',building: 'Los jazminess',type: 'Car', amount: 900.50, date: '29/10/2019'},
  {id: 8, title:'Pago Agua  Marzo 2019',building: 'Los girasoles',type: 'Oxy', amount: 900.50, date: '29/10/2019'},
  {id: 9, title:'Pago Agua  Marzo 2019',building: 'Los jazminess',type: 'Agua', amount: 900.50, date: '29/10/2019'},
  {id: 10,title:'Pago Agua  Marzo 2019',building: 'Los girasoles',type: 'Agua', amount: 900.50, date: '29/10/2019'},
  {id: 11,title:'Pago Agua  Marzo 2019',building: 'Los girasoles',type: 'Agua', amount: 900.50, date: '29/10/2019'},
  {id: 12,title:'Pago Agua  Marzo 2019',building: 'Los jazminess',type: 'Mag', amount: 900.50, date: '29/10/2019'},
  {id: 13,title:'Pago Agua  Marzo 2019',building: 'Los girasoles',type: 'Agua', amount: 900.50, date: '29/10/2019'},
  {id: 14,title:'Pago Agua  Marzo 2019',building: 'Los jazminess',type: 'Sil', amount: 900.50, date: '29/10/2019'},
  {id: 15,title:'Pago Agua  Marzo 2019',building: 'Los girasoles',type: 'Pho', amount: 900.50, date: '29/10/2019'},
  {id: 16,title:'Pago Agua  Marzo 2019',building: 'Los jazminess',type: 'Sul', amount: 900.50, date: '29/10/2019'},
  {id: 17,title:'Pago Agua  Marzo 2019',building: 'Los jazminess',type: 'Chl', amount: 900.50, date: '29/10/2019'},
  {id: 18,title:'Pago Agua  Marzo 2019',building: 'Los girasoles',type: 'Arg', amount: 900.50, date: '29/10/2019'},
  {id: 19,title:'Pago Agua  Marzo 2019',building: 'Los girasoles',type: 'Pot', amount: 900.50, date: '29/10/2019'},
  {id: 20,title:'Pago Agua  Marzo 2019',building: 'Los jazminess',type: 'Cal', amount: 900.50, date: '29/10/2019'},
];

@Component({
  selector: 'bill-table',
  templateUrl: './bill-table.component.html',
  styleUrls: ['./bill-table.component.scss']
})
export class BillTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'building', 'type', 'amount', 'date'];
  dataSource = new MatTableDataSource<Bill>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BillFormComponent, {
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
