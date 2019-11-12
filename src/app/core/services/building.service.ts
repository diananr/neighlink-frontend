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

  getBuildings() {
    return this.apiService.get('api/building/all');
  }

  getBuildingById(buildingId: number) {
    return this.apiService.get(`api/building/byId/${buildingId}`);
  }
}
