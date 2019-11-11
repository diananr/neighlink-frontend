import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class BillService {

  constructor(
    private apiService: ApiService
  ) { }

  createBill(request: any) {
    return this.apiService.post('api/bill', request);
  }

  updateBill(request: any) {
    return this.apiService.put('api/bill', request);
  }

  getBills() {
    return this.apiService.get('api/bill/all');
  }

  getBillById(billId: number) {
    return this.apiService.get(`api/bill/byId/${billId}`);
  }
}
