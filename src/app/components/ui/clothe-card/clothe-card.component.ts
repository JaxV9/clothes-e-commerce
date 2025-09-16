import { Component, input } from '@angular/core';

@Component({
  selector: 'app-clothe-card',
  imports: [],
  templateUrl: './clothe-card.component.html',
  styleUrl: './clothe-card.component.css',
})
export class ClotheCardComponent {
  imagePath = input<string>();
  title = input<string>();
  subTitle = input<string>();
  price = input<string>();
}
