import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { NumericDirective } from '../numeric.directive';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [NumericDirective, ReactiveFormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent {
  productForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)],
    }),
    category: new FormControl('', { nonNullable: true }),
  });
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  createProduct() {
    this.productsService
      .addProduct(this.productForm.value)
      .subscribe(() => this.router.navigate(['/products']));
  }
}
