import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Cart } from "../models/cart.model";
import { CartState } from "./cart.state";


export const CART_STATE_NAME = "cart";

export const getCartState = createFeatureSelector<CartState>(CART_STATE_NAME);

export const showCart = createSelector(getCartState, (state) => {
  return state.cart;
})

