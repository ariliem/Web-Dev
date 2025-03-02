import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports:[FormsModule, CommonModule, RouterModule],
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const albumId = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.albumsObservable.subscribe((albums: Album[]) => {
      this.album = albums.find(a => a.id === albumId)!;
    });
  }

  save(): void {
    this.albumsService.updateAlbum(this.album);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
