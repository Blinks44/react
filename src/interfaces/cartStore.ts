import { Product } from "@/interfaces/";

export interface CartStore {
  cart: Product[];
  total: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}
