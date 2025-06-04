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
    // Input decorator allows parent component to pass product data to this card
  @Input() product!: Product;
  // emits an event to the parent
  @Output() viewDetails = new EventEmitter<number>();

  //Method call on click of view details button
  onViewDetails(): void{
    this.viewDetails.emit(this.product.id);
  }
}
