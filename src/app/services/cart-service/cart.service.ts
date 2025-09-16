import { Injectable, signal } from '@angular/core';

@Injectable()
export class CartService {
  isDisplay = signal<boolean>(false);
}
