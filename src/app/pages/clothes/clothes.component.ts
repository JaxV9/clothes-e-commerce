import { Component } from '@angular/core';
import { ClothesCardListComponent } from '../../components/clothes-card-list/clothes-card-list.component';

@Component({
  selector: 'app-clothes',
  imports: [ClothesCardListComponent],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.css',
})
export class ClothesComponent {}
