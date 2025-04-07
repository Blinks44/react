import { Box, Heading } from "@chakra-ui/react";

function PageBanner({ title, image }) {
  return (
    <Box
      p="20"
      bgImage={`url(${image})`}
      bgSize="cover"
      bgPos="center"
      pos="relative"
      _before={{
        content: '""',
        position: "absolute",
        inset: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Heading
        as="h1"
        size={{ base: "3xl", lg: "4xl" }}
        color="white"
        textAlign="center"
        pos="relative"
        zIndex="10"
        textShadow="0 0 6px black"
      >
        {title}
      </Heading>
    </Box>
  );
}

export default PageBanner;
