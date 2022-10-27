import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  formProduct: any ;
  price = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  quantity = new FormControl('', [Validators.required]);
  photo = new FormControl('', [Validators.required]);
  constructor() {}

  ngOnInit(): void {
    this.formProduct = new FormGroup({
      name: this.name,
      quantity: this.quantity,
      price: this.price,
      photo: this.photo,
    });
  }

  submitForm() {
    console.log(this.formProduct.value);
  }
}
