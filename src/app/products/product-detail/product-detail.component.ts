import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CurrencyPipe, NgIf } from '@angular/common';


import { ProductService } from '../product.service';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, NgIf],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    // Holds the product object to be displayed in the UI
  product?: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute, // to access parameters from route
    private router: Router // To navigate 
  ) { }

  ngOnInit(): void {
    // Extracts product ID from the route parameters
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Fetches product data based on ID and assigns it to the component's product property
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }
  onBackClick(): void {
    // Navigates back to the product list view
    this.router.navigate(['/products']);
  }
}