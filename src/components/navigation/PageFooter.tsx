import { Box, Circle, Container, Flex, HStack, Image, Separator, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { FaGithub, FaTwitter } from "react-icons/fa";

const PageFooter = () => {
  return (
    <Box bg="gray.100" py={12} mt={8} as={"footer"}>
      <Container>
        <Flex direction={"column"} gap={4}>
          <Link to="/">
            <Image src="/logo.png" alt="logo" width="100px" />
          </Link>
          <HStack>
            <ChakraLink href="https://google.ru">
              <Circle size={8} bg={"gray.300"}>
                <FaGithub />
              </Circle>
            </ChakraLink>

            <ChakraLink href="https://google.ru">
              <Circle size={8} bg={"gray.300"}>
                <FaTwitter />
              </Circle>
            </ChakraLink>
          </HStack>
        </Flex>
        <Separator my={6} />
        <Flex justify={"space-between"}>
          <p>&copy; 2025. Пет-проджект</p>
          <p>s.vrenev</p>
        </Flex>
      </Container>
    </Box>
  );
};

export default PageFooter;
