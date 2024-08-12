import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  @Input() product: Product | undefined;
  @Output() added = new EventEmitter<Product>();

  addToCart() {
    this.added.emit(this.product);
  }

  get productTitle() {
    return this.product?.title;
  }
}
