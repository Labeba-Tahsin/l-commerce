import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductDetailComponent,
    CartComponent,
    ProductListComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductDashboardComponent
  ]
})
export class ProductsModule { }
