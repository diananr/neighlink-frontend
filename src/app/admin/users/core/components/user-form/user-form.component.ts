import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { BuildingService } from 'src/app/core/services/building.service';
import { User } from 'src/app/core/models/user.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public userFG: FormGroup;
  public userId: number;
  public buildings: any[];

  constructor(private fb: FormBuilder, private userService: UserService,
    private buildingService: BuildingService, private router: Router,
    private route: ActivatedRoute) { }

  reset(){
    this.userFG = this.fb.group({
      id: [],
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
      buildingId: ['',[Validators.required]],
      role: ['',[Validators.required]],
      status: []
    });
    this.userId = null;
    this.buildings = [];
  }

  getBuildings(){
    this.buildingService.getBuildings().subscribe(
      (response) => {
        console.log('response', response);
      },
      (error) => {
        console.log('error', error)
      }
    )
  }

  ngOnInit() {
    this.reset();
    this.getBuildings();
    this.route.params.subscribe((params: Params) => {
      this.userId = params.id;
      if(this.userId) this.getUser();
    });
  }

  getUser(){
    this.userService.getUserById(this.userId).subscribe(
      (response: any)=>{
        this.userFG.patchValue(response);
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  onSubmit(){
    if(this.userFG.valid){
      let user: User = Object.assign({},this.userFG.value);
      let request: Observable<any>;

      if(!user.id){
        request = this.userService.createUser(user)
      } else {
        request = this.userService.updateUser(user)
      }

      request.subscribe(
        (response: any)=>{
          if (!user.id) console.log('refresh list');
          if (user.id) this.router.navigate(['/users']);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.userFG.value);
    }
  }
}
