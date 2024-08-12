import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { SortPipe } from '../sort.pipe';
import { ProductHostDirective } from '../product-host.directive';
import { ProductsService } from '../products/products.service';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ProductViewComponent } from '../product-view/product-view.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductDetailsComponent,
    FavoritesComponent,
    ProductViewComponent,
    SortPipe,
    ProductHostDirective,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService],
})
export class ProductListComponent implements OnInit {
  // products = inject(ProductsService).getProducts();
  products: Product[] = [];
  selectedProduct: Product | undefined;

  constructor(private ProductsService: ProductsService) {}

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }

  private getProducts() {
    return this.ProductsService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit() {
    this.getProducts();
  }
}
