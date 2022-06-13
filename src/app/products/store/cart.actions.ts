import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product.model";

const ADD_TO_CART = "[Cart] add to cart";
const ADD_TO_CART_SUCCESS = "[Cart] added to cart successfully";
const DELETE_FROM_CART = "[Cart] delete from cart";
const ITEM_COUNT_CHANGE = "[Cart] item count change";

export const addToCart = createAction(ADD_TO_CART, props<{ product: Product, id: string, count: number }>());

export const cartItemCountChange = createAction(ITEM_COUNT_CHANGE, props<{ count: number, id: string }>());

export const deleteFromCart = createAction(DELETE_FROM_CART, props<{ id: string }>());
