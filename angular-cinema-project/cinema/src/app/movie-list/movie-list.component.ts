import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service'


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private httpService : HttpService
  ) { }

  ngOnInit(): void {
  }

  getMovies(): void {


  // this.movies = this.httpService.getList();
  //   console.table(this.httpService.getList());
  }

  deleteMovie(id: number): any {}

}
