import { Box, Button, Card, Image, Icon } from "@chakra-ui/react";
import { Product } from "@/interfaces";
import { LuTrash2 } from "react-icons/lu";
import { useCartStore } from "@/store/useCartStore.ts";

const CartItem = ({ item }: { item: Product }) => {
  const { removeFromCart } = useCartStore();

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
        <Card.Body p={6}>
          <Card.Title mb="2">
            {item.title} - {item.quantity}
          </Card.Title>
          <Card.Description lineClamp={2}>{item.description}</Card.Description>
        </Card.Body>
      </Box>
      <Button
        bg={"red.100"}
        flexShrink={0}
        flexBasis={"40px"}
        display={"flex"}
        justifyContent={"center"}
        h={"full"}
        _hover={{ bg: "red.200" }}
        onClick={() => removeFromCart(item.id)}
      >
        <Icon color={"red.500"}>
          <LuTrash2 />
        </Icon>
      </Button>
    </Card.Root>
  );
};

export default CartItem;
