import { Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

function ProductSingleSkeleton() {
  return (
    <Flex flexDir={{ base: "column", md: "row" }} gap={4}>
      <Skeleton w={"1/2"} h={"400px"} hideBelow={"md"} />

      <Flex w={{ md: "1/2" }} flexDir={"column"} gap={4}>
        <Skeleton h={4} />
        <Skeleton h={4} />
        <Skeleton w={"full"} h={52} hideFrom={"md"} />
        <SkeletonText noOfLines={5} />
      </Flex>
    </Flex>
  );
}

export default ProductSingleSkeleton;
