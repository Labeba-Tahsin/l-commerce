import { Action, createReducer, on } from "@ngrx/store";
import { Cart } from "../models/cart.model";
import { addToCart, cartItemCountChange, deleteFromCart } from "./cart.actions";
import { initialState } from "./cart.state";

function cartItemChange(cart: Cart[], count: number, id: string): Cart[] {
  let tempCart: Cart[] = [];
  cart.forEach(element => {
    if (element.id !== id) {
      tempCart.push(element);
    } else {
      let elem = {
        product: element.product,
        count: count,
        id: element.id
      }
      tempCart.push(elem);
    }
  });
  return tempCart;
}


const _cartReducer = createReducer(initialState,
  on(addToCart, (state, action) => {
    return {
      ...state,
      cart: [
        ...state.cart,
        {
          product: action.product,
          id: action.id,
          count: action.count
        }]
    }
  }),
  on(deleteFromCart, (state, action) => {
    return {
      ...state,
      cart: state.cart.filter(x => x.id !== action.id)
    }
  }),
  on(cartItemCountChange, (state, action) => {
    return {
      ...state,
      cart: cartItemChange(state.cart, action.count, action.id)
    }
  })
);



export function CartReducer(state = initialState, action: Action) {
  return _cartReducer(state, action);
}

