import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { SortPipe } from '../sort.pipe';
import { ProductHostDirective } from '../product-host.directive';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailsComponent, SortPipe, ProductHostDirective],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = inject(ProductsService).getProducts();

  selectedProduct: Product | undefined;

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }
}
