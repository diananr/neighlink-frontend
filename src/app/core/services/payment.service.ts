import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class PaymentService {

  constructor(
    private apiService: ApiService
  ) { }

  createPayment(request: any) {
    return this.apiService.post('api/payment', request);
  }

  updatePayment(request: any) {
    return this.apiService.put('api/payment', request);
  }

  getPayments() {
    return this.apiService.get('api/payment/all');
  }

  getPaymentById(paymentId: number) {
    return this.apiService.get(`api/payment/byId/${paymentId}`);
  }
}
