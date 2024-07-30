import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in-modal.component.html',
  styleUrl: './sign-in-modal.component.scss'
})
export class SignInModalComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() openRegister = new EventEmitter<void>();

  authService = inject(AuthService);

  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      //@ts-ignore
      //this.authService.login(this.form.value);
      this.closeModal();
    }
  }

  // onSubmit() {
  //   if (this.form.valid) {
  //     console.log(this.form.value);
  //     // @ts-ignore
  //     this.authService.login(this.form.value).subscribe(response => {
  //       console.log('Login successful', response);
  //       this.closeModal();
  //     }, error => {
  //       console.error('Login failed', error);
  //     });
  //   }
  // }

  loginWithGoogle() {
    console.log('Login with Google');
  }

  loginWithFacebook() {
    console.log('Login with Facebook');
  }

  loginWithApple() {
    console.log('Login with Apple');
  }

  navigateToRegister() {
    this.closeModal();
    this.openRegister.emit();
  }
}
