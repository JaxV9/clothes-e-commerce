import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  text = input<string>();
  path = input<string>('');
  isMain = input<boolean>(false);
  isLink = input<boolean>(false);
}
