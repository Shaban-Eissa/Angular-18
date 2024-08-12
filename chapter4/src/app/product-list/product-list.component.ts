import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { SortPipe } from '../sort.pipe';
import { ProductHostDirective } from '../product-host.directive';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailsComponent, SortPipe, ProductHostDirective],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      title: 'Keyboard',
      price: 100,
      categories: {
        1: 'Computing',
        2: 'Peripherals',
      },
    },
    {
      id: 2,
      title: 'Microphone',
      price: 35,
      categories: { 3: 'Multimedia' },
    },
    {
      id: 3,
      title: 'Web camera',
      price: 79,
      categories: {
        1: 'Computing',
        3: 'Multimedia',
      },
    },
    {
      id: 4,
      title: 'Tablet',
      price: 500,
      categories: { 4: 'Entertainment' },
    },
  ];

  selectedProduct: Product | undefined = this.products[0];

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }
}
