import { Box, Container, Heading, SimpleGrid, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";
import ProductItem from "../components/product/ProductItem.jsx";
import { useState } from "react";
import ProductFilter from "../components/product/ProductFilter.jsx";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getProducts from "../api/getProducts.js";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState("");

  const { isLoading, data: products } = useQuery({
    queryKey: ["products", filter],
    queryFn: getProducts,
  });

  function handleFilterChange(filter) {
    setFilter(filter);
  }

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
          {isLoading ? (
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
            products.map((product) => <ProductItem product={product} key={product.id} />)
          )}
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Index;
