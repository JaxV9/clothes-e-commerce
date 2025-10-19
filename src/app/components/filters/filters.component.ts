import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { BackComponent } from '../ui/buttons/back/back.component';

@Component({
  selector: 'app-filters',
  imports: [CommonModule, BackComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  elementRef = inject(ElementRef);
  filterIsDisplay = signal<boolean>(false);

  toggleFilter(): void {
    this.filterIsDisplay.update((prev) => !prev);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.filterIsDisplay()) {
      this.toggleFilter();
    }
  }
}
