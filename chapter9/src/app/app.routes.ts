import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { authGuard } from './auth.guard';
import { checkoutGuard } from './checkout.guard';
export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products/new', component: ProductCreateComponent },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard],
    canDeactivate: [checkoutGuard],
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: 'products' },
];
