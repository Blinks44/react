import { create } from "zustand";
import { CartStore, Product } from "@/interfaces";

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product: Product) => set((state) => ({ cart: [...state.cart, product] })),
}));
