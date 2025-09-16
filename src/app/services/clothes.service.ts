import { Injectable } from '@angular/core';
import { QuickHttp, ResAction } from '@jaslay/http';
import { StoreService } from './store.service';
import { Clothe } from '../../models/models';

@Injectable()
export class ClothesService {
  baseUrl = 'https://api.escuelajs.co/';
  headers = {
    'Content-Type': 'application/json',
  };
  quickHttp = new QuickHttp(this.baseUrl, this.headers, 'omit');

  async loadClothes() {
    const response: ResAction = await this.quickHttp.get(
      'api/v1/products/?categorySlug=clothes'
    );
    const payload = response.payload as Clothe[];
    const result = Array.from({ length: 12 }, (_, index) => ({
      ...payload[4],
      id: index,
    }));
    console.log(result);
    this.storeService.addItem('clothes', result);
  }

  getClothes(): Clothe[] {
    const clothes = this.storeService.store()['clothes'] as Clothe[];
    return clothes;
  }

  constructor(private readonly storeService: StoreService) {}
}
