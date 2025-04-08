import { Box, Container, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

function ProductSingle({ product }) {
  return (
    <Grid
      as={"article"}
      gridTemplateColumns={{ md: "50% 1fr" }}
      gridTemplateAreas={"'image title'" + "'image description'"}
      gridTemplateRows={"auto auto auto"}
      alignItems={"start"}
      gap={4}
    >
      <Heading as={"h1"} fontSize={{ md: "xl" }} gridArea={"title"}>
        {product.title}
      </Heading>
      <Image
        src={product.images[0]}
        alt={product.title}
        objectFit="cover"
        w="full"
        maxH={"300px"}
        order={{ md: "-1" }}
        gridArea={"image"}
      />
      <Text gridArea={"description"}>{product.description}</Text>
    </Grid>
  );
}

export default ProductSingle;
