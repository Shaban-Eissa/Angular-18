import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Directive({
  selector: '[appProductHost]',
  standalone: true,
})
export class ProductHostDirective implements OnInit {
  constructor(private vc: ViewContainerRef) {}
  ngOnInit(): void {
    const productRef = this.vc.createComponent(ProductDetailsComponent);
    productRef.setInput('product', {
      title: 'Printer',
      price: 100,
      categories: {
        1: 'Electronics',
      },
    });
  }
}
