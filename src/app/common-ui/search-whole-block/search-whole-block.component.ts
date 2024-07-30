import { Component } from '@angular/core';
import { SearchOptionsBlockComponent } from '../search-options-block/search-options-block.component';
import { SearchResultsBlockComponent } from '../search-results-block/search-results-block.component';
import { HotelInfoPageComponent } from '../../pages/hotel-info-page/hotel-info-page.component';

@Component({
  selector: 'app-search-whole-block',
  standalone: true,
  imports: [SearchOptionsBlockComponent, SearchResultsBlockComponent],
  templateUrl: './search-whole-block.component.html',
  styleUrl: './search-whole-block.component.scss'
})
export class SearchWholeBlockComponent {

}
