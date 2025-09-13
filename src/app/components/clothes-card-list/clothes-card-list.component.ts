import { Component, effect, OnInit, signal } from '@angular/core';
import { ClothesService } from '../../services/clothes.service';
import { Clothe } from '../../../models/models';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-clothes-card-list',
  imports: [],
  templateUrl: './clothes-card-list.component.html',
  styleUrl: './clothes-card-list.component.css',
})
export class ClothesCardListComponent {
  clothes = signal<Clothe[]>([]);
  constructor(
    private readonly clothesService: ClothesService,
    private readonly storeService: StoreService
  ) {
    effect(() => {
      const clothes = this.clothesService.getClothes();
      if (clothes) {
        this.clothes.set(clothes);
      }
      if (this.clothes()) {
        console.log(this.clothes());
      }
    });
  }
}
