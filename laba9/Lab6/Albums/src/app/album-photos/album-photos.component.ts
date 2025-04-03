import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  imports: [CommonModule],
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.albumId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
      .subscribe(data => this.photos = data);
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
