import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import OrderItem from "./OrderItem.jsx";
import OrderSelect from "./OrderSelect.jsx";
import { useEffect, useState } from "react";

function Order() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    return await res.json();
  }

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <>
      s
      <Container mt="12">
        <Heading as="h1" size="3xl" textAlign="center">
          Сделать заказ
        </Heading>

        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} gap="8" mt="8">
          {products.map((product) => (
            <OrderItem product={product} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Order;
