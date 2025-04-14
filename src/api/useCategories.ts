import { Category } from "@/interfaces";
import { useQuery } from "@tanstack/react-query";

interface SelectOption {
  label: string;
  value: string;
}

interface CategoriesResponse {
  categories: Category[];
  categoriesForSelect: SelectOption[];
}

const fetchCategories = async (): Promise<CategoriesResponse> => {
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

export const useCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
