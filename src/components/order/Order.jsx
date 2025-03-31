import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import OrderItem from "./OrderItem.jsx";
import OrderSelect from "./OrderSelect.jsx";

function Order() {
  return (
    <>
      <Container mt="12">
        <Heading as="h1" size="3xl" textAlign="center">
          Сделать заказ
        </Heading>

        <Box mt="8">
          <OrderSelect />
        </Box>

        <SimpleGrid gap="4" mt="8">
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Order;
