import { createListCollection, Stack, Portal, Select, Skeleton } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function ProductFilter({ handleFilterChange }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCategories() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    return await res.json();
  }

  function handleFilter(category) {
    setSelectedCategory(category);
    handleFilterChange(category);
  }

  const categoriesCollection = createListCollection({
    items: categories,
  });

  useEffect(() => {
    getCategories().then((data) => {
      const formattedData = data.map((item) => ({
        label: item.name,
        value: item.slug,
      }));
      setCategories(formattedData);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
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
