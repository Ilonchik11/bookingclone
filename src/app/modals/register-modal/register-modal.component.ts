import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationCodeModalComponent } from '../authentication-code-modal/authentication-code-modal.component';

@Component({
  selector: 'app-register-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, AuthenticationCodeModalComponent],
  templateUrl: './register-modal.component.html',
  styleUrl: './register-modal.component.scss'
})
export class RegisterModalComponent {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() openAuthentication = new EventEmitter<void>();

  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  onSubmit() {
    console.log('Username:', this.email);
    console.log('Password:', this.password);
    console.log('Repeat password:', this.repeatPassword);
    this.closeModal();
  }

  isFormValid(): boolean {
    return this.email.trim() !== '' && this.password.trim() !== '' 
    && this.repeatPassword.trim() !== '' && this.password == this.repeatPassword;
  }

  loginWithGoogle() {
    console.log('Login with Google');
  }

  loginWithFacebook() {
    console.log('Login with Facebook');
  }

  loginWithApple() {
    console.log('Login with Apple');
  }

  navigateToSignIn() {
    this.closeModal();
  }

  navigateToAuthentication() {
    this.closeModal();
    this.openAuthentication.emit();
  }
}
