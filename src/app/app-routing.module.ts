import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: '/login', pathMatch: 'full' },
  {
    path: "products",
    loadChildren: () =>
      import("../app/products/products.module").then(m => m.ProductsModule)
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
