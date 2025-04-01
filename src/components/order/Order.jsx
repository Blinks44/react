import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import OrderItem from "./OrderItem.jsx";
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
      <Container mt="12">
        <Heading as="h1" size="3xl" textAlign="center">
          Сделать заказ
        </Heading>

        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} gap="8" mt="8">
          {products.map((product) => (
            <OrderItem product={product} key={product.id} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Order;
