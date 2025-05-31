import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../../shared/models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ ProductCardComponent,NgFor ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
    console.log(this.products);
  }

  onViewDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }
}