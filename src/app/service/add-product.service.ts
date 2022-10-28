import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  baseUrl: String = 'http://10.99.1.0:8083/restapiproduct';

  constructor(private http: HttpClient) {}

  addProduct(product: any) {
    const productObject = {
      name: product.name,
      quantity: product.quantity,
      price: product.price,
    
    }
    return this.http.post(this.baseUrl + "/add", productObject);
  }
}
