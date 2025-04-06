import { createFileRoute } from "@tanstack/react-router";
import { useCartStore } from "../store/useCartStore.js";
import { Container, Text } from "@chakra-ui/react";

export const Route = createFileRoute("/cart")({
  component: Cart,
});

function Cart() {
  const { cart } = useCartStore();

  return (
    <Container mt={8}>
      {cart.length > 0 && cart.map((item) => item.title)}

      {cart.length === 0 && (
        <Text textStyle={{ base: "xl", md: "3xl" }} textAlign={"center"}>
          Товаров в корзине еще нет
        </Text>
      )}
    </Container>
  );
}
