async function getCategories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await res.json();

  const selectData = data.map((category) => ({
    label: category.name,
    value: category.slug,
  }));

  return {
    categories: data,
    selectCategories: selectData,
  };
}

export default getCategories;
