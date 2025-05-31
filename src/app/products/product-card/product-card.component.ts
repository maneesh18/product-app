import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';


import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() viewDetails = new EventEmitter<number>();

  onViewDetails(): void{
    this.viewDetails.emit(this.product.id);
  }
}
