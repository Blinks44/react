import { Badge, Button, Flex, Heading, Image, Separator, Text } from "@chakra-ui/react";
import { useCartStore } from "../../store/useCartStore.ts";

function ProductSingle({ product }) {
  const { addToCart } = useCartStore();

  return (
    <Flex as={"article"} flexDir={{ base: "column", md: "row" }} alignItems={"start"} gap={4}>
      <Image w={"1/2"} hideBelow={"md"} src={product.images[0]} alt={product.title} objectFit="cover" />

      <Flex flexDir={"column"} alignItems={"flex-start"}>
        <Heading as={"h1"} fontSize={{ md: "2xl" }}>
          {product.title} - {product.id}
        </Heading>
        <Badge mt={2}>{product.category.name}</Badge>
        <Separator mt={4} w={20} borderColor={"black"} size={"lg"} />
        <Text mt={4} fontWeight={"700"} fontSize={"xl"}>
          ${product.price}
        </Text>
        <Image
          hideFrom={"md"}
          src={product.images[0]}
          alt={product.title}
          objectFit="cover"
          w="full"
          maxH={"300px"}
          mt={4}
        />
        <Text mt={4}>{product.description}</Text>
        <Button mt={6} onClick={() => addToCart(product)}>
          В корзину
        </Button>
      </Flex>
    </Flex>
  );
}

export default ProductSingle;
