import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UserService {

  constructor(
    private apiService: ApiService
  ) { }

  createUser(request: any) {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    request.condominiumId = userLogged.condominiumId;
    return this.apiService.post('api/user', request);
  }

  updateUser(request: any) {
    return this.apiService.put('api/user', request);
  }

  getUserById(userId: number) {
    return this.apiService.get(`api/user/${userId}`);
  }

  getUsersByCondominium() {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    return this.apiService.get('api/user/by-condominium/'+ userLogged.condominiumId);
  }
}
