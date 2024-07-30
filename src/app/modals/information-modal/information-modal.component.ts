import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-information-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './information-modal.component.html',
  styleUrl: './information-modal.component.scss'
})
export class InformationModalComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() openAllDone = new EventEmitter<void>();

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  // form = new FormGroup({
  //   country: new FormControl(null, Validators.required),
  //   city: new FormControl(null, Validators.required),
  //   whyTravel: new FormControl(null, Validators.required)
  // });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.closeModal();
    }
  }

  form: FormGroup;
  countries: string[] = ['USA', 'Canada', 'Mexico'];
  cities: string[] = ['New York', 'Los Angeles', 'Chicago'];
  travelReasons: string[] = ['Business', 'Leisure', 'Education'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      country: [''],
      city: [''],
      whyTravel: [''],
      travellingWithPet: ['']
    });
  }

  navigateToAllDone() {
    this.closeModal();
    this.openAllDone.emit();
  }
}
