import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailsComponent {
  @Input() product: Product | undefined;
  @Output() added = new EventEmitter<Product>();

  addToCart() {
    this.added.emit(this.product);
  }
}
