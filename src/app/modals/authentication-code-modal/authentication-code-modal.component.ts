import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationModalComponent } from '../information-modal/information-modal.component';

@Component({
  selector: 'app-authentication-code-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InformationModalComponent],
  templateUrl: './authentication-code-modal.component.html',
  styleUrl: './authentication-code-modal.component.scss'
})
export class AuthenticationCodeModalComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() openInformation = new EventEmitter<void>();

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  form = new FormGroup({
    code: new FormControl(null, Validators.required)
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.closeModal();
    }
  }

  navigateToInformation() {
    this.closeModal();
    this.openInformation.emit();
  }
}
