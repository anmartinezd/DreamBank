import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewProductInterface } from '../../interfaces/new-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  requestNewProduct(newProductForm: NewProductInterface): Observable<string>{
    return this.httpClient.post<string>(`${environment.API_URL}/product/request`, newProductForm);
  }
}
