import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-search-options-block',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search-options-block.component.html',
  styleUrl: './search-options-block.component.scss'
})
export class SearchOptionsBlockComponent {
  private readonly minPosition: number = 76;
  private readonly maxPosition: number = 230;

  thumbPosition: number = (this.maxPosition + this.minPosition) / 2;
  isDragging: boolean = false;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.moveThumb(event.clientX);
    }
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
    console.log(this.thumbPosition);
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;
  }

  moveThumb(clientX: number) {
    const sliderContainer = document.querySelector('.slider-container');
    const rect = sliderContainer!.getBoundingClientRect();
    const newLeft = clientX - rect.left;

    if (newLeft >= 0 && newLeft <= rect.width) {
      this.thumbPosition = newLeft;
    }
  }
}
