import { Product } from "@/interfaces";

async function getProducts({ queryKey }: { queryKey: [string, string] }): Promise<Product[]> {
  const [, filter] = queryKey;
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/?categorySlug=${filter}`);
  return await res.json();
}

export default getProducts;
