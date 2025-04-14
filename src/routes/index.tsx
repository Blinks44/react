import { Container, GridItem, SimpleGrid, Skeleton, SkeletonText, Stack, Text } from "@chakra-ui/react";
import ProductCard from "../components/product/ProductCard.tsx";
import { useState } from "react";
import ProductFilter from "../components/product/ProductFilter.tsx";
import { createFileRoute } from "@tanstack/react-router";
import { useProducts } from "../api/useProducts.ts";
import PageBanner from "../components/navigation/PageBanner.tsx";

const RouteComponent = () => {
  const [filter, setFilter] = useState("");

  const { isLoading, data: products } = useProducts(filter);

  function handleFilterChange(filter: string) {
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
              {products &&
                products.length > 0 &&
                products.map((product) => <ProductCard product={product} key={product.id} />)}

              {products && products.length === 0 && (
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
};

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
