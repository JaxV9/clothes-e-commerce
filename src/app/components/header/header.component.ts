import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../services/cart-service/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  imports: [SelectModule, MatIconModule, ButtonModule, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private readonly cartService: CartService) {}

  toggleCart(): void {
    this.cartService.isDisplay.update((prev) => !prev);
  }
}
