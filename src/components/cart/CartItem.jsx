import { Box, Card, Image } from "@chakra-ui/react";

function CartItem({ item }) {
  return (
    <Card.Root flexDirection={{ base: "column", md: "row" }} overflow="hidden" alignItems="center">
      <Image
        src={item.images[0]}
        alt={item.title}
        objectFit="cover"
        h={{ base: "160px", md: "full" }}
        w={{ base: "full", md: "120px" }}
        flexShrink={0}
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">{item.title}</Card.Title>
          <Card.Description lineClamp={3}>
            Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk. Caffè
            latte is a coffee beverage of Italian origin made with espresso and steamed milk. latte is a
            coffee beverage of Italian origin made with espresso and steamed milk. latte is a coffee beverage
            of Italian origin made with espresso and steamed milk.
          </Card.Description>
        </Card.Body>
      </Box>
    </Card.Root>
  );
}

export default CartItem;
