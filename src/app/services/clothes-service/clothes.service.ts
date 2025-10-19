import { Injectable } from '@angular/core';
import { QuickHttp, ResAction } from '@jaslay/http';
import { Clothe } from '../../../models/models';
import { StoreService } from '../store-service/store.service';
import { environment } from '../../../environment';
import { fakeClothes } from './fakeData';

@Injectable()
export class ClothesService {
  baseUrl = environment.baseUrl;
  headers = {
    'Content-Type': 'application/json',
  };
  quickHttp = new QuickHttp(this.baseUrl, this.headers, 'omit');

  async loadClothes() {
    const response: ResAction = await this.quickHttp.get('clothes/');
    const payload = response.payload as Clothe[];
    const result = Array.from({ length: 12 }, (_, index) => ({
      ...payload[index % 2 === 0 ? 1 : 0],
      id: index,
    }));
    this.storeService.addItem('clothes', result);
  }

  getClothes(): Clothe[] {
    const clothes = this.storeService.store()['clothes'] as Clothe[];
    return clothes;
  }

  constructor(private readonly storeService: StoreService) {}
}
