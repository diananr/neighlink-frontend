import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BillService } from 'src/app/core/services/bill.service';
import { BuildingService } from 'src/app/core/services/building.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Bill } from 'src/app/core/models/bill.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.scss']
})
export class BillFormComponent implements OnInit {
  public billFG: FormGroup;
  public billId: number;
  public buildings: any[];

  constructor(private fb: FormBuilder, private billService: BillService,
    private buildingService: BuildingService, private router: Router,
    private route: ActivatedRoute) { }

  reset(){
    this.billFG = this.fb.group({
      id: [],
      title: ['',[Validators.required]],
      buildingId: ['',[Validators.required]],
      categoryId: ['',[Validators.required]],
      startDate: ['',[Validators.required]],
      endDate: ['',[Validators.required]],
      amount: ['',[Validators.required]],
      status: []
    });
    this.billId = null;
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
      this.billId = params.id;
      if(this.billId) this.getBill();
    });
  }

  getBill(){
    this.billService.getBillById(this.billId).subscribe(
      (response: any)=>{
        this.billFG.patchValue(response.data);
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  onSubmit(){
    if(this.billFG.valid){
      let bill: Bill = Object.assign({},this.billFG.value);
      let request: Observable<any>;

      if(!bill.id){
        request = this.billService.createBill(bill)
      } else {
        request = this.billService.updateBill(bill)
      }

      request.subscribe(
        (response: any)=>{
          if (!bill.id) console.log('refresh list');
          if (bill.id) this.router.navigate(['/bills']);
        },
        (error: any)=>{
          console.log('error', error);
        }
      );
    } else {
      console.log('invalid form', this.billFG.value);
    }
  }

}
