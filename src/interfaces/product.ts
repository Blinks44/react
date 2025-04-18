import { Category } from "@/interfaces";

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  quantity: number;
}
