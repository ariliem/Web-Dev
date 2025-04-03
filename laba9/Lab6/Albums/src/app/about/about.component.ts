import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AlbumsService} from '../albums.service';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private router: Router) { }
  goBack(): void {
    this.router.navigate(['/home']);
  }
}
