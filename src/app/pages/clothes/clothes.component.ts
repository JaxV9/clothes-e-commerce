import { Component } from '@angular/core';
import { ClothesCardListComponent } from '../../components/clothes-card-list/clothes-card-list.component';
import { FiltersComponent } from '../../components/filters/filters.component';
import { BackComponent } from '../../components/ui/buttons/back/back.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clothes',
  imports: [
    ClothesCardListComponent,
    FiltersComponent,
    BackComponent,
    RouterModule,
  ],
  templateUrl: './clothes.component.html',
  styleUrl: './clothes.component.css',
})
export class ClothesComponent {}
