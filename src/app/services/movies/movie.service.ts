import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandlerService } from '../http-error-handler/http-error-handler.service';
import { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  moviesUrl: string = 'https://localhost:5001/Movies';

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService
  ) { 
    this.handleError = httpErrorHandler.createHandleError('EventService');
  }

  getMovies(): Observable<any> {
    return this.http.get<Movie>(this.moviesUrl)
      .pipe(
        catchError(this.handleError('getMovies'))
      );
  }

  getMovie(id: number): Observable<any> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url)
      .pipe(
        catchError(this.handleError('getMovie'))
      );
  }

  addMovie(movie: Movie): Observable<any> {
    return this.http.post<Movie>(this.moviesUrl, movie)
      .pipe(
        catchError(this.handleError('addMovie', movie))
      );
  }

  updateMovie(movie: Movie): Observable<any> {
    const url = `${this.moviesUrl}/${movie.id}`;
    return this.http.put(url, movie)
      .pipe(
        catchError(this.handleError('updateMovie', movie))
      );
  }

  removeMovie(id: number): Observable<any> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError('deleteMovie'))
      )
  }
}
