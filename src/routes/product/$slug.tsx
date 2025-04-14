import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getProduct from "../../api/getProduct.ts";
import { Container } from "@chakra-ui/react";
import ProductSingle from "../../components/product/ProductSingle.tsx";
import ProductSingleSkeleton from "../../components/product/ProductSingleSkeleton.tsx";

const RouteComponent = () => {
  const { slug } = Route.useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["product", slug],
    queryFn: getProduct,
  });

  return (
    <Container mt={8}>
      {isLoading ? <ProductSingleSkeleton /> : data && <ProductSingle product={data} />}
    </Container>
  );
};
export const Route = createFileRoute("/product/$slug")({
  component: RouteComponent,
});
