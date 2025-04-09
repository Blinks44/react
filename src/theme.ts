import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: '"Roboto", sans-serif' },
        body: { value: '"Roboto", sans-serif' },
      },
      colors: {
        black: { value: "#1c1c20" },
      },
    },
  },
});

export default theme;
