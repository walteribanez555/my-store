import { Injectable } from '@angular/core';
import { environment } from './../../enviroments/enviroment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = `${environment.API_URL}/api/categories`

  constructor(
    private http: HttpClient
  ) { }

  getAll( limit? : number, offset?: number){
    let params = new HttpParams();
    if(limit && offset){
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }

    return this.http.get<Category[]>(this.apiUrl,{ params});
  }
}
