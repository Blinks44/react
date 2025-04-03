import { Button, Card, Image, Text } from "@chakra-ui/react";
import { useCart } from "../../routes/__root.jsx";

function ProductItem({ product }) {
  const { cart, setCart } = useCart();

  return (
    <Card.Root overflow="hidden" _hover={{ scale: 1.02 }} transition="scale 0.2s">
      <Image src={product.images[0]} alt={product.title} />
      <Card.Body gap="2">
        <Card.Title>{product.title}</Card.Title>
        <Card.Description lineClamp="5" mt="auto">
          {product.description}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ${product.price}
        </Text>
      </Card.Body>
      <Card.Footer flexDirection="column" gap="2">
        <Button w="full" variant="solid" onClick={() => setCart([...cart, product])}>
          Купить
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default ProductItem;
