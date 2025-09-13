import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreService } from './services/store.service';
import { ClothesService } from './services/clothes.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [StoreService, ClothesService],
})
export class AppComponent implements OnInit {
  constructor(private readonly clothesService: ClothesService) {}

  ngOnInit(): void {
    this.clothesService.loadClothes();
    console.log(this.clothesService.getClothes());
  }
}
