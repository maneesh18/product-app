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
  // Holds the list of products fetched from the service
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Fetch all products when component initializes and assign them to local state
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  //we can use if we have large number of products
  trackByIndex(index: number): number {
    return index;
  }

  onViewDetails(id: number): void {
    // Navigate to the detail view of the selected product using its ID
    this.router.navigate(['/products', id]);
  }
}