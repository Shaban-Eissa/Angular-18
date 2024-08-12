import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
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
export class ProductDetailsComponent implements OnDestroy {
  @Input() product: Product | undefined;
  @Output() added = new EventEmitter<Product>();

  constructor() {
    console.log('ProductDetailsComponent created', this.product);
  }

  // ngOnInit(): void {
  //   console.log('ProductDetailsComponent initialized', this.product);
  // }

  ngOnDestroy(): void {
    console.log(
      'We can use this hook to unsubscribe from external resources or cancel some events when component unmounted or destroyed'
    );
  }

  addToCart() {
    this.added.emit(this.product);
  }

  get productTitle() {
    return this.product?.title;
  }
}
