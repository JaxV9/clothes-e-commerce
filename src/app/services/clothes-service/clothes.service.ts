import { Injectable } from '@angular/core';
import { QuickHttp, ResAction } from '@jaslay/http';
import { Clothe, Tag } from '../../../models/models';
import { StoreService } from '../store-service/store.service';
import { environment } from '../../../environment';

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
    const clothes = Array.from({ length: 12 }, (_, index) => ({
      ...payload[index % 2 === 0 ? 1 : 0],
      id: index,
    }));
    const tags = this.getTagsFromClothes(clothes);
    this.storeService.addItem('clothes', clothes);
    this.storeService.addItem('tags', tags);
    console.log(this.storeService.store());
  }

  getClothes(): Clothe[] {
    const clothes = this.storeService.store()['clothes'] as Clothe[];
    return clothes;
  }

  getTagsFromClothes(clothes: Clothe[]): Tag[] {
    const tags: Tag[] = [];
    clothes.map((clothe) => {
      clothe.tags.map((tag) => {
        if (!tags.includes(tag.name)) {
          tags.push(tag.name);
        }
      });
    });
    return tags;
  }

  constructor(private readonly storeService: StoreService) {}
}
