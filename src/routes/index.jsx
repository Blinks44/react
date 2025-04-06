import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from "@chakra-ui/react";
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
      <Box
        p="20"
        bgImage="url(/products.jpg)"
        bgSize="cover"
        bgPos="center"
        pos="relative"
        _before={{
          content: '""',
          position: "absolute",
          inset: "0",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Heading
          as="h1"
          size={{ base: "3xl", lg: "4xl" }}
          color="white"
          textAlign="center"
          pos="relative"
          zIndex="10"
          textShadow="0 0 6px black"
        >
          Товары
        </Heading>
      </Box>

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
                products.map((product) => <ProductItem product={product} key={product.id} />)}

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

export default Index;
