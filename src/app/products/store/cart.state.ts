import { Cart } from "../models/cart.model";
import { Product } from "../models/product.model";

export interface CartState {
  cart: Array<Cart>,
}

export const initialState: CartState = {
  cart: []
}
