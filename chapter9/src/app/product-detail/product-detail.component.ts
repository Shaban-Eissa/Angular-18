import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Product } from '../product';
import { Observable, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { NumericDirective } from '../numeric.directive';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, NumericDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  @Input() id: string | undefined;
  product$: Observable<Product> | undefined;

  constructor(
    private productService: ProductsService,
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.product$ = this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     return this.productService.getProduct(Number(params.get('id')));
    //   })
    // );

    this.product$ = this.productService.getProduct(Number(this.id!));
  }

  addToCart() {}

  changePrice(product: Product, price: string) {
    this.productService
      .updateProduct(product.id, Number(price))
      .subscribe(() => {
        this.router.navigate(['/products']);
      });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}
