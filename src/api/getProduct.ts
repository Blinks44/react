import { Product } from "@/interfaces";

const getProduct = async ({ queryKey }: { queryKey: [string, string] }): Promise<Product> => {
  const [, slug] = queryKey;
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/slug/${slug}`);
  return await res.json();
};

export default getProduct;
