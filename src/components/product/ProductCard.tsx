import { Button, Card, Image, Text } from "@chakra-ui/react";
import { useCartStore } from "@/store/useCartStore.js";
import { Link } from "@tanstack/react-router";
import { Product } from "@/interfaces";

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCartStore();

  return (
    <Card.Root overflow="hidden" _hover={{ scale: 1.02 }} transition="scale 0.2s">
      <Link to={`/product/${product.slug}`}>
        <Image src={product.images[0]} alt={product.title} objectFit="cover" w="full" h="52" />
      </Link>
      <Card.Body gap="2">
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>
        <Card.Description lineClamp="5" mt="auto">
          {product.description}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ${product.price}
        </Text>
      </Card.Body>
      <Card.Footer flexDirection="column" gap="2">
        <Button w="full" variant="solid" onClick={() => addToCart(product)}>
          Купить
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default ProductCard;
