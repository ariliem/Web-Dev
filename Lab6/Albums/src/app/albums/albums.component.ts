import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { AlbumsService, Album } from '../albums.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-albums',
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

export class AlbumsComponent implements OnInit {
  albums: Album[] = [];


  constructor(private albumsService: AlbumsService, private router: Router) { }

  ngOnInit(): void {
    this.albumsService.albumsObservable.subscribe((data: Album[]) => {
      this.albums = data;
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id);
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}
