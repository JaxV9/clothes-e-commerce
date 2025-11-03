import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-back',
  imports: [CommonModule],
  templateUrl: './back.component.html',
  styleUrl: './back.component.css',
})
export class BackComponent {
  position = input<'left' | 'right'>('left');
}
