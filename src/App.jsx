import PageHeader from "./components/navigation/PageHeader.jsx";
import Products from "./components/product/Products.jsx";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function handleCartChange(cartItem) {
    setCart([...cart, cartItem]);
  }

  return (
    <>
      <PageHeader cart={cart} />

      <Products handleCartChange={handleCartChange} />
    </>
  );
}

export default App;
