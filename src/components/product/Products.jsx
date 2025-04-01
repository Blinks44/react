import { Button, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ProductItem from "./ProductItem.jsx";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  async function getProducts() {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/?categorySlug=${filter}`);
    return await res.json();
  }

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, [filter]);

  return (
    <>
      <Container mt="12">
        <Heading as="h1" size="3xl" textAlign="center">
          Сделать заказ
        </Heading>

        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} gap="8" mt="8">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Products;
