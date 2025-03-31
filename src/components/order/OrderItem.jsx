import { Box, Card, Image } from "@chakra-ui/react";
import OrderSelect from "./OrderSelect.jsx";

function OrderItem() {
  return (
    <Card.Root flexDirection="row" overflow="hidden">
      <Image
        objectFit="cover"
        maxW="200px"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">The perfect latte</Card.Title>
          <Card.Description>
            Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
          </Card.Description>
          <OrderSelect />
        </Card.Body>
      </Box>
    </Card.Root>
  );
}

export default OrderItem;
