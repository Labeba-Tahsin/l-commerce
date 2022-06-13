import { Product } from "./product.model";

export interface Cart {
  product: Product,
  id: string,
  count: number
}
