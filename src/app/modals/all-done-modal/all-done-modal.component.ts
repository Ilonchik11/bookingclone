import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-all-done-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-done-modal.component.html',
  styleUrl: './all-done-modal.component.scss'
})
export class AllDoneModalComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  onSubmit() {
    this.closeModal();
  }
}
