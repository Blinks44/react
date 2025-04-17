import { Circle, Box, Container, Flex, Float, Image } from "@chakra-ui/react";
import { useCartStore } from "@/store/useCartStore.ts";
import { Link } from "@tanstack/react-router";

const PageHeader = () => {
  const { cart, total } = useCartStore();

  return (
    <Box
      as="header"
      pos="sticky"
      top="0"
      shadow="sm"
      bgColor="white/70"
      backdropFilter="blur(8px)"
      zIndex={50}
    >
      <Container>
        <Flex py="4" justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Image src="/logo.png" alt="logo" width="100px" />
          </Link>

          <Box as="nav" pos="relative">
            <Link to="/cart">Корзина</Link>
            {cart.length > 0 && (
              <Float zIndex={-1}>
                <Circle size="4.5" fontSize="xs" bg="red.500" color="white">
                  {total}
                </Circle>
              </Float>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default PageHeader;
