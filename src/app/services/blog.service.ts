import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Articolo } from '../models/articolo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getArticoli() : Observable<Articolo[]>  {

return this.http.get<Articolo[]>(`${environment}/articoli`)

  }


}
