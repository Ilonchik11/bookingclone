import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UpperNavbarComponent } from '../upper-navbar/upper-navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { UnderNavbarBlockComponent } from '../under-navbar-block/under-navbar-block.component';
import { IconsSetStartPageComponent } from '../icons-set-start-page/icons-set-start-page.component';
import { BeOurRegularComponent } from '../be-our-regular/be-our-regular.component';
import { RegisterBtnBigComponent } from '../register-btn-big/register-btn-big.component';
import { SafeWithUsComponent } from '../safe-with-us/safe-with-us.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { HotelsPreviewComponent } from '../hotels-preview/hotels-preview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, UpperNavbarComponent, UnderNavbarBlockComponent, 
    IconsSetStartPageComponent, SafeWithUsComponent, HotelsPreviewComponent,
    ReviewsComponent, BeOurRegularComponent,
    RegisterBtnBigComponent, FooterComponent, RouterLink, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
