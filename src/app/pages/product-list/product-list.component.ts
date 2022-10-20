import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllOfProducts();
  }

  getAllOfProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
