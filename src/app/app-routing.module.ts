import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';


const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'movie-detail/:movieId', component: MovieDetailComponent },
  { path: 'edit-movie/:movieId', component: EditMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
