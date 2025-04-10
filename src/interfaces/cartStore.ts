import { Product } from "@/interfaces/";

export interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
}
