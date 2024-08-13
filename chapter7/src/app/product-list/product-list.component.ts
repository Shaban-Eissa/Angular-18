import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-details/product-details.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { ProductCreateComponent } from '../product-create/product-create.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductDetailComponent,
    ProductCreateComponent,
    SortPipe,
    CommonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  selectedProduct: Product | undefined;

  constructor(private ProductsService: ProductsService) {}

  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }

  ngOnInit(): void {
    this.products$ = this.ProductsService.getProducts();
  }
}
