import { Circle, Box, Container, Flex, Float, Image, Link, Text } from "@chakra-ui/react";

function PageHeader({ cart }) {
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
          <Link href="/">
            <Image src="/logo.png" alt="logo" width="100px" />
          </Link>

          <Box as="nav" pos="relative">
            <Text zIndex="10" pos="relative">
              Корзина
            </Text>
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
