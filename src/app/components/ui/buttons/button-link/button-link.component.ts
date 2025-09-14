import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-link',
  imports: [CommonModule, RouterLink],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.css',
})
export class ButtonLinkComponent {
  text = input<string>();
  path = input<string>('');
}
