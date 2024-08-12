import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
