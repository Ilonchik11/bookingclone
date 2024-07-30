import { Routes } from '@angular/router';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HotelInfoPageComponent } from './pages/hotel-info-page/hotel-info-page.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
        { path: '', component: StartPageComponent },
        { path: 'search', component: SearchPageComponent },
        { path: 'hotel-info', component: HotelInfoPageComponent }
    ] }
];
