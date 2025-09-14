import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  text = input<string>();
  level = input<'h1' | 'h2' | 'h3' | 'h4'>();
}
