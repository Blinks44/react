import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import getProduct from "../../api/getProduct.js";
import { Container } from "@chakra-ui/react";
import ProductSingle from "../../components/product/ProductSingle.jsx";

export const Route = createFileRoute("/product/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["product", slug],
    queryFn: getProduct,
  });

  return (
    <Container mt={8}>
      {isLoading ? (
        <h1>
          <span>123</span>
        </h1>
      ) : (
        <ProductSingle product={data} />
      )}
    </Container>
  );
}
