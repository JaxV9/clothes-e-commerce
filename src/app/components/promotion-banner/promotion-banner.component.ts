import { Component, input } from '@angular/core';

@Component({
  selector: 'app-promotion-banner',
  imports: [],
  templateUrl: './promotion-banner.component.html',
  styleUrl: './promotion-banner.component.css',
})
export class PromotionBannerComponent {
  imageLink = input<string>();
}
