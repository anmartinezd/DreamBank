import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  apiUrl = `${environment.apiUrl}`

  constructor(private httpClient: HttpClient) { 
  }

  get(resource:string, params: {[key:string]:any}): Observable<T>{
    return this.httpClient.get<T>(`${this.apiUrl}/${resource}`, {
      params: params,
    });
  }

  getById(resource:string, id: string): Observable<T>{
    return this.httpClient.get<T>(`${this.apiUrl}/${resource}/${id}`);
  }

  post(resource:string, data:any, action?: string): Observable<T>{
    return this.httpClient.post<T>(`${this.apiUrl}/${resource}/${action}`,data)
  }
}
