import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: String = 'http://10.99.1.0:8083/restapiproduct';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.baseUrl + '/all');
  }

  getProduct(id: number) {
    return this.http.get(`${this.baseUrl}/server/api/v1/products/${id}`);
  }

  getCategories() {
    return this.http.get(this.baseUrl + '/server/api/v1/categories');
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseUrl + `/server/api/v1/products/${id}`);
  }
}
