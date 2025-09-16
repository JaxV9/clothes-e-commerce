import { Component, effect, signal } from '@angular/core';
import { Clothe } from '../../../models/models';
import { ClothesService } from '../../services/clothes.service';
import { ButtonLinkComponent } from '../ui/buttons/button-link/button-link.component';
import { ClotheCardComponent } from '../ui/clothe-card/clothe-card.component';

@Component({
  selector: 'app-clothes-card-list-preview',
  imports: [ButtonLinkComponent, ClotheCardComponent],
  templateUrl: './clothes-card-list-preview.component.html',
  styleUrl: './clothes-card-list-preview.component.css',
})
export class ClothesCardListPreviewComponent {
  clothes = signal<Clothe[]>([]);
  constructor(private readonly clothesService: ClothesService) {
    effect(() => {
      const clothes = this.clothesService.getClothes()?.splice(0, 5);
      if (clothes) {
        this.clothes.set(clothes);
      }
    });
  }
}
