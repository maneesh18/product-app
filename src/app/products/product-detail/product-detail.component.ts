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
  product?: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }
  onBackClick(): void {
    this.router.navigate(['/products']);
  }
}