import { Circle, Box, Container, Flex, Float, Image } from "@chakra-ui/react";
import { useCartStore } from "../../store/useCartStore.js";
import { Link } from "@tanstack/react-router";

function PageHeader() {
  const { cart } = useCartStore();

  return (
    <Box
      as="header"
      pos="sticky"
      top="0"
      shadow="sm"
      bgColor="white/70"
      backdropFilter="blur(8px)"
      zIndex="50"
    >
      <Container>
        <Flex py="4" justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Image src="/logo.png" alt="logo" width="100px" />
          </Link>

          <Box as="nav" pos="relative">
            <Link to="/cart" zIndex="10" pos="relative">
              Корзина
            </Link>
            {cart.length ? (
              <Float>
                <Circle size="4.5" fontSize="xs" bg="red.500" color="white">
                  {cart.length}
                </Circle>
              </Float>
            ) : (
              ""
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default PageHeader;
