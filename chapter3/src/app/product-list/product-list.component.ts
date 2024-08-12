import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  selectedProduct: Product | undefined;
  products: Product[] = [
    { id: '1', title: 'Keyboard' },
    { id: '2', title: 'Microphone' },
    { id: '3', title: 'Mouse' },
  ];

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }
}
