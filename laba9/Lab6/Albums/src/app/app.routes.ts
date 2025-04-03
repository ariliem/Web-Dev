import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import { Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // root redirect
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
  { path: '**', redirectTo: '/home' }  // wildcard redirect
];


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
