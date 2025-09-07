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
    const response: ResAction = await this.quickHttp.get('api/v1/products');
    const payload = response.payload as Clothe[];
    this.storeService.addItemToStore('clothes', payload);
  }

  async getClothes() {
    const store = this.storeService.store()['clothes'];
    console.log(store);
  }

  constructor(private readonly storeService: StoreService) {}
}
