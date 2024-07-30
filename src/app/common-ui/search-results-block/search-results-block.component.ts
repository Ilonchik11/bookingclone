import { Component } from '@angular/core';
import { HotelInfoPageComponent } from '../../pages/hotel-info-page/hotel-info-page.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-results-block',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search-results-block.component.html',
  styleUrl: './search-results-block.component.scss'
})
export class SearchResultsBlockComponent {
  constructor(private router: Router) {}
  openHotelInfo() {
    this.router.navigate(['hotel-info']);
  }
}
