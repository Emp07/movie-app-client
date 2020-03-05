import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MovieService } from 'src/app/services/movies/movie.service';
import { switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie;
  editMovieForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.editMovieForm = this.formBuilder.group({
      id: '',
      name: '',
      synopsis: ''
    });

    this.movie = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.movieService.getMovie(+params.get('movieId')).pipe(tap(
          movie => this.editMovieForm.patchValue(movie))
        )));
  }

  onSubmit(formData) {

    this.movieService.updateMovie(formData).subscribe(() => window.alert('Movie has been updated'));
  }
}
