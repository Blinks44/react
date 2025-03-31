import { createSystem, defaultConfig } from "@chakra-ui/react";

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: '"Roboto", sans-serif' },
        body: { value: '"Roboto", sans-serif' },
      },
    },
  },
});
