import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-under-navbar-block',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './under-navbar-block.component.html',
  styleUrl: './under-navbar-block.component.scss'
})
export class UnderNavbarBlockComponent {
  constructor(private router: Router) {}
  openSearch() {
    this.router.navigate(['search']);
  }
}
