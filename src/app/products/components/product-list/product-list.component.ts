import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { addToCart } from '../../store/cart.actions';
import { CartState } from '../../store/cart.state';
import { v4 as uuidv4 } from 'uuid';
import { NotifierService } from 'angular-notifier';
import { setLoadingSpinner } from '../../../shared/store/shared.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  private readonly notifier: NotifierService;

  constructor(
    private productService: ProductService,
    private router: Router,
    private store: Store,
    notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(res => {

      this.products = res;
      this.store.dispatch(setLoadingSpinner({ status: false }));

    })
  }

  star(val: number, star: boolean): number[] {
    if (star) return Array(Math.floor(val));
    else return Array(5 - Math.floor(val));
  }

  addCart(product: Product): void {
    this.store.dispatch(addToCart({ product: product, id: uuidv4(), count: 1 }));
    this.notifier.notify("success", "Ádded to Cart Successfully");

  }

}
