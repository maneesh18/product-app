import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent,
    ProductListComponent,
    ProductDetailComponent
  ]
})
export class ProductsModule { }