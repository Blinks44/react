import { create } from "zustand";
import { CartStore, Product } from "@/interfaces";

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  total: 0,
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      let updatedCart: Product[];

      if (existingProduct) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      const totalProducts = updatedCart.reduce((acc, item) => acc + item.quantity, 0);

      return { cart: updatedCart, total: totalProducts };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      const totalProducts = updatedCart.reduce((acc, item) => acc + item.quantity, 0);

      return { cart: updatedCart, total: totalProducts };
    }),
}));
