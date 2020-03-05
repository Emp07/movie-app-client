import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.movies = this.movieService.getMovies();
  }

  removeMovie(id: number) {
    this.movieService.removeMovie(id).subscribe(() => this.fetchData());
  }
}
