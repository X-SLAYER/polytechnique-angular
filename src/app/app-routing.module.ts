import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../app/pages/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'home',
    component: ProductListComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
