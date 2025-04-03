import { Box, Container, Heading, SimpleGrid, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import ProductItem from "../components/product/ProductItem.jsx";
import { useEffect, useState } from "react";
import ProductFilter from "../components/product/ProductFilter.jsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index({ handleCartChange }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  async function getProducts() {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/?categorySlug=${filter}`);
    return await res.json();
  }

  function handleFilterChange(filter) {
    setFilter(filter);
  }

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [filter]);

  return (
    <>
      <Container mt="12">
        <Heading as="h1" size="3xl" textAlign="center">
          Товары
        </Heading>

        <Box mt="8">
          <ProductFilter handleFilterChange={handleFilterChange} />
        </Box>

        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} gap="8" mt="8">
          {loading ? (
            <>
              <Stack>
                <Skeleton w="full" h="52" />
                <SkeletonText noOfLines={3} />
              </Stack>
              <Stack>
                <Skeleton w="full" h="52" />
                <SkeletonText noOfLines={3} />
              </Stack>
              <Stack>
                <Skeleton w="full" h="52" />
                <SkeletonText noOfLines={3} />
              </Stack>
              <Stack>
                <Skeleton w="full" h="52" />
                <SkeletonText noOfLines={3} />
              </Stack>
            </>
          ) : (
            products.map((product) => (
              <ProductItem product={product} key={product.id} handleCartChange={handleCartChange} />
            ))
          )}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Index;
