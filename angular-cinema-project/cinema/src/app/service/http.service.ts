import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/movies';
  "https://testserver/githubname/movies"

  endPoint: string = `https://tr360-frontend-exam-april.azurewebsites.net/FeketeO/movies`;

  constructor(private http: HttpClient) { }

  getList(id: number):Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.endPoint}`);
  }



  deleteMovie(id):any {
    return null;
  }
}
