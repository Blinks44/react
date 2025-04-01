import { Portal, Select, createListCollection } from "@chakra-ui/react";

function ProductSelect() {
  const sizes = createListCollection({
    items: [
      { label: "S", value: "s" },
      { label: "M", value: "m" },
      { label: "L", value: "l" },
      { label: "XL", value: "xl" },
    ],
  });

  return (
    <Select.Root collection={sizes} size="sm" width="full">
      <Select.HiddenSelect />
      <Select.Label>Выберите размер</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Выберите размер" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {sizes.items.map((size) => (
              <Select.Item item={size} key={size.value}>
                {size.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}

export default ProductSelect;
