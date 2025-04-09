import { createFileRoute } from "@tanstack/react-router";
import { useCartStore } from "../../store/useCartStore.js";
import { Container, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import CartItem from "../../components/cart/CartItem.jsx";
import PageBanner from "../../components/navigation/PageBanner.jsx";

export const Route = createFileRoute("/cart/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { cart } = useCartStore();

  return (
    <>
      <PageBanner title={"Корзина"} image={"/cart.jpg"} />

      <Container mt={8}>
        <SimpleGrid columns={{ base: 2, md: "1" }} gap={4}>
          {cart.length > 0 && cart.map((item) => <CartItem item={item} />)}
        </SimpleGrid>

        {cart.length === 0 && (
          <Text textStyle={{ base: "xl", md: "3xl" }} textAlign={"center"}>
            Товаров в корзине еще нет
          </Text>
        )}
      </Container>
    </>
  );
}
