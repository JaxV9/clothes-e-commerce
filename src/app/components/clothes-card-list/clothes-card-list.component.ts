import { Component, effect, signal } from '@angular/core';
import { Clothe } from '../../../models/models';
import { ClothesService } from '../../services/clothes-service/clothes.service';
import { ClotheCardComponent } from '../ui/clothe-card/clothe-card.component';

@Component({
  selector: 'app-clothes-card-list',
  imports: [ClotheCardComponent],
  templateUrl: './clothes-card-list.component.html',
  styleUrl: './clothes-card-list.component.css',
})
export class ClothesCardListComponent {
  clothes = signal<Clothe[]>([]);
  constructor(public readonly clothesService: ClothesService) {
    effect(() => {
      const clothes = this.clothesService.getClothes();
      if (clothes) {
        this.clothes.set(clothes);
      }
      if (this.clothes()) {
        this.clothes();
      }
    });
  }
}
