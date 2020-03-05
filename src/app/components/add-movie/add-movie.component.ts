import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MovieService } from 'src/app/services/movies/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  addMovieForm;

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService
  ) { 
    this.addMovieForm = this.formBuilder.group({
      id: '',
      name: '',
      synopsis: ''
    });
  }

  ngOnInit(): void {

    
  }

  onSubmit(formData) {

    this.movieService.addMovie(formData).subscribe(() => window.alert('Movie has been added'));
  }
}
