import { Box, Container, Flex, Image } from "@chakra-ui/react";

function PageHeader() {
  return (
    <Box as={"header"} pos={"sticky"} top={0} shadow={"sm"} bgColor={"white/20"} backdropFilter={"blur(8px)"}>
      <Container>
        <Flex p={4} justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Image src={"/logo.png"} alt={"logo"} width={"100px"} />
          </Box>

          <Box as={"nav"}>Корзина</Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default PageHeader;
