import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../../../../../core/models/user.model';

const ELEMENT_DATA: User[] = [
  {id: 1,  role: 'Propietariop', name: 'Hydrogen', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las girasoles'},
  {id: 2,  role: 'Propietariop', name: 'Helium', lastName: 'Jimenez', email: 'email@gmail.com', building: 'Las flores'},
  {id: 3,  role: 'Propietariop', name: 'Lithium', lastName: 'Monterrey', email: 'email@gmail.com', building: 'Las flores'},
  {id: 4,  role: 'Propietariop', name: 'Beryllium', lastName: 'De la piedra', email: 'email@gmail.com', building: 'Los girasoles'},
  {id: 5,  role: 'Propietariop', name: 'Boron', lastName: 'Toribio', email: 'email@gmail.com', building: 'Las flores'},
  {id: 6,  role: 'Propietariop', name: 'Carbon', lastName: 'Caravedo', email: 'email@gmail.com', building: 'Las flores'},
  {id: 7,  role: 'Propietariop', name: 'Nitrogen', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las flores'},
  {id: 8,  role: 'Propietariop', name: 'Oxygen', lastName: 'Liao', email: 'email@gmail.com', building: 'Las girasoles'},
  {id: 9,  role: 'Propietariop', name: 'Fluorine', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las girasoles'},
  {id: 10, role: 'Propietariop', name: 'Neon', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las flores'},
  {id: 11, role: 'Propietariop', name: 'Sodium', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las flores'},
  {id: 12, role: 'Propietariop', name: 'Magnesium', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las flores'},
  {id: 13, role: 'Propietariop', name: 'Aluminum', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las girasoles'},
  {id: 14, role: 'Propietariop', name: 'Silicon', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las flores'},
  {id: 15, role: 'Propietariop', name: 'Phosphorus', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las girasoles'},
  {id: 16, role: 'Propietariop', name: 'Sulfur', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las flores'},
  {id: 17, role: 'Propietariop', name: 'Chlorine', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las flores'},
  {id: 18, role: 'Propietariop', name: 'Argon', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las girasoles'},
  {id: 19, role: 'Propietariop', name: 'Potassium', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las girasoles'},
  {id: 20, role: 'Propietariop', name: 'Calcium', lastName: 'Ruiz', email: 'email@gmail.com', building: 'Las flores'},
];

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'email', 'building', 'status', 'options'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
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
