import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddProductService } from 'src/app/service/add-product.service';

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
  constructor(private addProductService: AddProductService) {}

  ngOnInit(): void {
    this.formProduct = new FormGroup({
      name: this.name,
      quantity: this.quantity,
      price: this.price,
    });
  }

  submitForm() {
    this.addProductService.addProduct(this.formProduct.value).subscribe(
      (data:any) => { console.log(data); }, // success path 
      (erreur:any) => { console.log(erreur); } // error path
    );
    
  }
}
