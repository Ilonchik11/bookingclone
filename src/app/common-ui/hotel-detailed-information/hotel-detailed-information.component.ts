import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-detailed-information',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hotel-detailed-information.component.html',
  styleUrl: './hotel-detailed-information.component.scss'
})
export class HotelDetailedInformationComponent {
  constructor(private router: Router) {}
  backToSearch() {
    this.router.navigate(['search']);
  }
}
