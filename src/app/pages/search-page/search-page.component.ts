import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { IconsSetSearchPageComponent } from '../../common-ui/icons-set-search-page/icons-set-search-page.component';
import { SearchWholeBlockComponent } from '../../common-ui/search-whole-block/search-whole-block.component';
import { UnderNavbarBlockComponent } from '../../common-ui/under-navbar-block/under-navbar-block.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, IconsSetSearchPageComponent, SearchWholeBlockComponent, UnderNavbarBlockComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

}
