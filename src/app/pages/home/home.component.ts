import { Component } from '@angular/core';
import { ClothesCardListComponent } from '../../components/clothes-card-list/clothes-card-list.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ClothesCardListPreviewComponent } from '../../components/clothes-card-list-preview/clothes-card-list-preview.component';

@Component({
  selector: 'app-home',
  imports: [
    ClothesCardListComponent,
    HeroComponent,
    ClothesCardListPreviewComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
