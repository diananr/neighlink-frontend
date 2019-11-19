import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class BuildingService {

  constructor(
    private apiService: ApiService
  ) { }

  createBuilding(request: any) {
    return this.apiService.post('api/building', request);
  }

  updateBuilding(request: any) {
    return this.apiService.put('api/building', request);
  }

  getBuildingById(buildingId: number) {
    return this.apiService.get(`api/building/byId/${buildingId}`);
  }

  getBuildingsByCondominium(condominiumId?: number) {
    var userLogged = JSON.parse(localStorage.getItem('userLogged'));
    var condoId = condominiumId ? condominiumId : userLogged.condominiumId;
    return this.apiService.get('api/building/by-condominium/'+ condoId);
  }
}
