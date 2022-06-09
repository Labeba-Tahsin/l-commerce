import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AuthGuard } from '../authentication/guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: ProductDashboardComponent,
    children: [
      { path: "product-list", component: ProductListComponent },
      { path: "product-detail/:id", component: ProductDetailComponent },
      { path: "cart", component: CartComponent },
      {
        path: "payment",
        canActivate: [AuthGuard],
        component: PaymentComponent
      },
      { path: "", redirectTo: "/product", pathMatch: "full" },
      { path: "", redirectTo: "/product", pathMatch: "full" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
