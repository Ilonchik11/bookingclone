import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignInModalComponent } from '../../modals/sign-in-modal/sign-in-modal.component';
import { CommonModule } from '@angular/common';
import { RegisterModalComponent } from '../../modals/register-modal/register-modal.component';
import { AuthenticationCodeModalComponent } from '../../modals/authentication-code-modal/authentication-code-modal.component';
import { InformationModalComponent } from '../../modals/information-modal/information-modal.component';
import { AllDoneModalComponent } from '../../modals/all-done-modal/all-done-modal.component';

@Component({
  selector: 'app-upper-navbar',
  standalone: true,
  imports: [SignInModalComponent, RegisterModalComponent, AuthenticationCodeModalComponent, 
    InformationModalComponent, AllDoneModalComponent, CommonModule, FormsModule],
  templateUrl: './upper-navbar.component.html',
  styleUrl: './upper-navbar.component.scss'
})
export class UpperNavbarComponent {
  isSignInModalVisible: boolean = false;
  isRegisterModalVisible: boolean = false;
  isAuthenticationCodeModalVisible: boolean = false;
  isInformationModalVisible: boolean = false;
  isAllDoneModalVisible: boolean = false;

  openSignInModal() {
    this.isSignInModalVisible = true;
    this.isRegisterModalVisible = false;
    this.isAuthenticationCodeModalVisible = false;
    this.isInformationModalVisible = false;
    this.isAllDoneModalVisible = false;
  }

  openRegisterModal() {
    this.isRegisterModalVisible = true;
    this.isSignInModalVisible = false;
    this.isAuthenticationCodeModalVisible = false;
    this.isInformationModalVisible = false;
    this.isAllDoneModalVisible = false;
  }

  openAuthenticationCodeModal() {
    this.isAuthenticationCodeModalVisible = true;
    this.isSignInModalVisible = false;
    this.isRegisterModalVisible = false;
    this.isInformationModalVisible = false;
    this.isAllDoneModalVisible = false;
  }

  openInformationModal() {
    this.isInformationModalVisible = true;
    this.isAuthenticationCodeModalVisible = false;
    this.isSignInModalVisible = false;
    this.isRegisterModalVisible = false;
    this.isAllDoneModalVisible = false;
  }

  openAllDoneModal() {
    this.isAllDoneModalVisible = true;
    this.isInformationModalVisible = false;
    this.isAuthenticationCodeModalVisible = false;
    this.isSignInModalVisible = false;
    this.isRegisterModalVisible = false;
    this.isAllDoneModalVisible = true;
  }

  closeSignInModal() {
    this.isSignInModalVisible = false;
  } 

  closeRegisterModal() {
    this.isRegisterModalVisible = false;
  }

  closeAuthenticationCodeModal() {
    this.isAuthenticationCodeModalVisible = false;
  }

  closeInformationModal() {
    this.isInformationModalVisible = false;
  }

  closeAllDoneModal() {
    this.isAllDoneModalVisible = false;
  }

  handleOpenAuthentication() {
    this.openAuthenticationCodeModal();
  }
}
