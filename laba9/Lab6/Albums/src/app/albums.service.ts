import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


export interface Album{
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  albums = new BehaviorSubject<Album[]>([]);
  albumsObservable = this.albums.asObservable();

  constructor(private http: HttpClient) {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.http.get<[]>(`${this.baseUrl}/albums`)
      .subscribe(data => this.albums.next(data));
  }

  addAlbum(newAlbum: Album): void {
    const albums = this.albums.getValue();
    this.albums.next([...albums, newAlbum]);
  }

  updateAlbum(updatedAlbum: Album): void {
    const albums = this.albums.getValue();
    const index = albums.findIndex(album => album.id === updatedAlbum.id);
    if (index > -1) {
      albums[index] = updatedAlbum;
      this.albums.next([...albums]);
    }
  }

  deleteAlbum(albumId: number): void {
    const albums = this.albums.getValue();
    const updatedAlbums = albums.filter(album => album.id !== albumId);
    this.albums.next(updatedAlbums);
  }
}
