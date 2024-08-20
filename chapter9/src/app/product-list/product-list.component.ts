import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, ProductDetailComponent, SortPipe, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  selectedProduct: Product | undefined;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  onAdded() {
    alert(`${this.selectedProduct?.title} added to the cart!`);
  }

  ngOnInit(): void {
    this.products$ = this.route.queryParamMap.pipe(
      switchMap((params) => {
        return this.productService.getProducts(Number(params.get('limit')));
      })
    );
  }
}
