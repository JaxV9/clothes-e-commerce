import { Component } from '@angular/core';
import { ClothesCardListComponent } from '../../components/clothes-card-list/clothes-card-list.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ClothesCardListPreviewComponent } from '../../components/clothes-card-list-preview/clothes-card-list-preview.component';
import { TitleComponent } from '../../components/ui/title/title.component';
import { PromotionBannerComponent } from '../../components/promotion-banner/promotion-banner.component';
import { ButtonLinkComponent } from '../../components/ui/buttons/button-link/button-link.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ClothesCardListPreviewComponent,
    TitleComponent,
    PromotionBannerComponent,
    ButtonLinkComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
