import { createListCollection, Stack, Portal, Select, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import { useCategories } from "@/api/useCategories.ts";

const ProductFilter = ({ handleFilterChange }: { handleFilterChange: Function }) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  function handleFilter(category: string[]) {
    setSelectedCategory(category);
    handleFilterChange(category);
  }

  const { isLoading, data } = useCategories();

  const categoriesCollection = createListCollection({
    items: data?.categoriesForSelect || [],
  });

  return (
    <>
      {isLoading ? (
        <Stack>
          <Skeleton height="6" width="72" />
          <Skeleton height="6" width="72" />
        </Stack>
      ) : (
        <Select.Root
          collection={categoriesCollection}
          size="sm"
          width="72"
          value={selectedCategory}
          onValueChange={(e) => handleFilter(e.value)}
        >
          <Select.HiddenSelect />
          <Select.Label>Выберите категорию</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Все товары" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {categoriesCollection.items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {item.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
      )}
    </>
  );
};

export default ProductFilter;
