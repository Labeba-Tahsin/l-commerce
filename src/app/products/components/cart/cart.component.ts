import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../../store/cart.state';
import { showCart } from '../../store/cart.selectors';
import { of, Observable } from 'rxjs';
import { Cart } from '../../models/cart.model';
import { cartItemCountChange, deleteFromCart } from '../../store/cart.actions';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart$: Observable<Cart[]> = of([]);
  price = 0;

  constructor(
    private store: Store<CartState>
  ) { }

  ngOnInit(): void {
    this.cart$ = this.store.select(showCart);
  }

  cartPlus(id: string, count: number) {
    this.store.dispatch(cartItemCountChange({ count: count + 1, id: id }));

  }

  cartMinus(id: string, count: number) {
    if (count > 1) {
      this.store.dispatch(cartItemCountChange({ count: count - 1, id: id }));

    }
  }

  itemDelete(id: string) {
    this.store.dispatch(deleteFromCart({ id: id }));
  }

  priceCount(cart: Cart[] | null) {
    let price = 0;
    if (cart !== null) {
      (cart).forEach(element => {
        price = price + (element.product.price * element.count)
      });
      return price;
    }
    else {
      return 0
    }
    return 0;
  }

}
