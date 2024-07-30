import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { BeOurRegularComponent } from '../../common-ui/be-our-regular/be-our-regular.component';
import { HotelsPreviewComponent } from '../../common-ui/hotels-preview/hotels-preview.component';
import { IconsSetStartPageComponent } from '../../common-ui/icons-set-start-page/icons-set-start-page.component';
import { RegisterBtnBigComponent } from '../../common-ui/register-btn-big/register-btn-big.component';
import { ReviewsComponent } from '../../common-ui/reviews/reviews.component';
import { SafeWithUsComponent } from '../../common-ui/safe-with-us/safe-with-us.component';
import { UnderNavbarBlockComponent } from '../../common-ui/under-navbar-block/under-navbar-block.component';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [RouterOutlet, 
    IconsSetStartPageComponent, SafeWithUsComponent, HotelsPreviewComponent,
    ReviewsComponent, BeOurRegularComponent,
    RegisterBtnBigComponent, RouterLink, CommonModule, UnderNavbarBlockComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

}
