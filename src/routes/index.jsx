import { Container, GridItem, SimpleGrid, Skeleton, SkeletonText, Stack, Text } from "@chakra-ui/react";
import ProductCard from "../components/product/ProductCard.jsx";
import { useState } from "react";
import ProductFilter from "../components/product/ProductFilter.jsx";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getProducts from "../api/getProducts.js";
import PageBanner from "../components/navigation/PageBanner.jsx";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
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
      <PageBanner title={"Товары"} image={"/products.jpg"} />

      <Container mt="8">
        <ProductFilter handleFilterChange={handleFilterChange} />

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
            <>
              {products.length > 0 &&
                products.map((product) => <ProductCard product={product} key={product.id} />)}

              {products.length === 0 && (
                <GridItem colSpan={12}>
                  <Text textStyle={{ base: "xl", md: "3xl" }} textAlign={"center"}>
                    В данной категории товаров еще нет...
                  </Text>
                </GridItem>
              )}
            </>
          )}
        </SimpleGrid>
      </Container>
    </>
  );
}
