import { Category } from "@/interfaces";

interface SelectOption {
  label: string;
  value: string;
}

interface CategoriesResponse {
  categories: Category[];
  categoriesForSelect: SelectOption[];
}

const getCategories = async (): Promise<CategoriesResponse> => {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories: Category[] = await res.json();

  const categoriesForSelect: SelectOption[] = categories.map((category: Category) => ({
    label: category.name,
    value: category.slug,
  }));

  return {
    categories,
    categoriesForSelect,
  };
};

export default getCategories;
