import { Product } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async ({ queryKey }: { queryKey: [string, string] }): Promise<Product[]> => {
  const [, filter] = queryKey;
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/?categorySlug=${filter}`);
  return await res.json();
};

export const useProducts = (filter: string) =>
  useQuery({
    queryKey: ["products", filter],
    queryFn: fetchProducts,
  });
