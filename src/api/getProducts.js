async function getProducts({ queryKey }) {
  const [, filter] = queryKey;
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/?categorySlug=${filter}`);
  return await res.json();
}

export default getProducts;
