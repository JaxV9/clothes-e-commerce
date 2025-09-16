import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClothesService } from './services/clothes-service/clothes.service';
import { StoreService } from './services/store-service/store.service';
import { CartService } from './services/cart-service/cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [StoreService, ClothesService, CartService],
})
export class AppComponent implements OnInit {
  constructor(private readonly clothesService: ClothesService) {}

  ngOnInit(): void {
    this.clothesService.loadClothes();
    console.log(this.clothesService.getClothes());
  }
}
