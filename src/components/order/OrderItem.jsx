import { Button, Card, Image, Text } from "@chakra-ui/react";
import OrderSelect from "./OrderSelect.jsx";

function OrderItem({ product }) {
  return (
    <Card.Root overflow="hidden">
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
        <OrderSelect />
        <Button w="full" variant="solid">
          Купить
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default OrderItem;
