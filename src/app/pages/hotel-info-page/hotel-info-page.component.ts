import { Component } from '@angular/core';
import { HotelDetailedInformationComponent } from '../../common-ui/hotel-detailed-information/hotel-detailed-information.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel-info-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HotelDetailedInformationComponent],
  templateUrl: './hotel-info-page.component.html',
  styleUrl: './hotel-info-page.component.scss'
})
export class HotelInfoPageComponent {

}
