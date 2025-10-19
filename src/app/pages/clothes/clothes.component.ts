import { Component } from '@angular/core';
import { ClothesCardListComponent } from '../../components/clothes-card-list/clothes-card-list.component';
import { FiltersComponent } from '../../components/filters/filters.component';

@Component({
  selector: 'app-clothes',
  imports: [ClothesCardListComponent, FiltersComponent],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.css',
})
export class ClothesComponent {}
