import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ClothesCardListPreviewComponent } from '../../components/clothes-card-list-preview/clothes-card-list-preview.component';
import { TitleComponent } from '../../components/ui/title/title.component';
import { PromotionBannerComponent } from '../../components/promotion-banner/promotion-banner.component';
import { ButtonComponent } from '../../components/ui/buttons/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ClothesCardListPreviewComponent,
    TitleComponent,
    PromotionBannerComponent,
    ButtonComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
