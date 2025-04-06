import { createListCollection, Stack, Portal, Select, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import getCategories from "../../api/getCategories.js";
import { useQuery } from "@tanstack/react-query";

function ProductFilter({ handleFilterChange }) {
  const [selectedCategory, setSelectedCategory] = useState([]);

  function handleFilter(category) {
    setSelectedCategory(category);
    handleFilterChange(category);
  }

  const { isLoading, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const categoriesCollection = createListCollection({
    items: data?.selectCategories || [],
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
}

export default ProductFilter;
