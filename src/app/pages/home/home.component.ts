import { Component } from '@angular/core';
import { ClothesCardListComponent } from '../../components/clothes-card-list/clothes-card-list.component';

@Component({
  selector: 'app-home',
  imports: [ClothesCardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
