import { createFileRoute } from "@tanstack/react-router";
import { useProduct } from "@/api/useProduct.ts";
import { Container } from "@chakra-ui/react";
import ProductSingle from "../../components/product/ProductSingle.tsx";
import ProductSingleSkeleton from "../../components/product/ProductSingleSkeleton.tsx";

const RouteComponent = () => {
  const { slug } = Route.useParams();
  const { isLoading, data } = useProduct(slug);

  return (
    <Container mt={8}>
      {isLoading ? <ProductSingleSkeleton /> : data && <ProductSingle product={data} />}
    </Container>
  );
};

export const Route = createFileRoute("/product/$slug")({
  component: RouteComponent,
});
