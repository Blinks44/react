import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import PageHeader from "../components/navigation/PageHeader.jsx";
import { createContext, useContext, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

const CartContext = createContext({
  cart: [],
  setCart: () => {},
});

export const useCart = () => useContext(CartContext);

function RootComponent() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <CartContext value={{ cart, setCart }}>
        <PageHeader />
        <Outlet />
      </CartContext>
      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools />
    </>
  );
}
