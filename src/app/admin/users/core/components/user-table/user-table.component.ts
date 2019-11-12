import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { User } from '../../../../../core/models/user.model';

const ELEMENT_DATA: User[] = [
  {id: 1,  roleId: 3, name: 'Hydrogen', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 2},
  {id: 2,  roleId: 3, name: 'Helium', lastName: 'Jimenez', email: 'email@gmail.com', buildingId: 1},
  {id: 3,  roleId: 3, name: 'Lithium', lastName: 'Monterrey', email: 'email@gmail.com', buildingId: 1},
  {id: 4,  roleId: 3, name: 'Beryllium', lastName: 'De la piedra', email: 'email@gmail.com', buildingId: 3},
  {id: 5,  roleId: 3, name: 'Boron', lastName: 'Toribio', email: 'email@gmail.com', buildingId: 1},
  {id: 6,  roleId: 3, name: 'Carbon', lastName: 'Caravedo', email: 'email@gmail.com', buildingId: 1},
  {id: 7,  roleId: 3, name: 'Nitrogen', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 1},
  {id: 8,  roleId: 3, name: 'Oxygen', lastName: 'Liao', email: 'email@gmail.com', buildingId: 2},
  {id: 9,  roleId: 3, name: 'Fluorine', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 2},
  {id: 10, roleId: 3, name: 'Neon', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 1},
  {id: 11, roleId: 3, name: 'Sodium', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 1},
  {id: 12, roleId: 3, name: 'Magnesium', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 1},
  {id: 13, roleId: 3, name: 'Aluminum', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 2},
  {id: 14, roleId: 3, name: 'Silicon', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 1},
  {id: 15, roleId: 3, name: 'Phosphorus', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 2},
  {id: 16, roleId: 3, name: 'Sulfur', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 1},
  {id: 17, roleId: 3, name: 'Chlorine', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 1},
  {id: 18, roleId: 3, name: 'Argon', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 2},
  {id: 19, roleId: 3, name: 'Potassium', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 2},
  {id: 20, roleId: 3, name: 'Calcium', lastName: 'Ruiz', email: 'email@gmail.com', buildingId: 1},
];

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'email', 'buildingId', 'status', 'options'];
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
