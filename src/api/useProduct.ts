import { Product } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";

const fetchProduct = async ({ queryKey }: { queryKey: [string, string] }): Promise<Product> => {
  const [, slug] = queryKey;
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/slug/${slug}`);
  return await res.json();
};

export const useProduct = (slug: string) =>
  useQuery({
    queryKey: ["product", slug],
    queryFn: fetchProduct,
  });
