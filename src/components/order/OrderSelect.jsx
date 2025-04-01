import { Portal, Select, createListCollection } from "@chakra-ui/react";

function OrderSelect() {
  const frameworks = createListCollection({
    items: [
      { label: "S", value: "s" },
      { label: "M", value: "m" },
      { label: "L", value: "l" },
      { label: "XL", value: "xl" },
    ],
  });

  return (
    <Select.Root collection={frameworks} size="sm" width="full">
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
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}

export default OrderSelect;
