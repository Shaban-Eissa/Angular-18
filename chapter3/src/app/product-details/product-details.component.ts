import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
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
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() added = new EventEmitter<Product>();

  constructor() {
    console.log('ProductDetailsComponent created', this.product);
  }

  ngOnInit(): void {
    console.log('ProductDetailsComponent initialized', this.product);
  }

  addToCart() {
    this.added.emit(this.product);
  }

  get productTitle() {
    return this.product?.title;
  }
}
