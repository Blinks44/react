import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import PageHeader from "../components/navigation/PageHeader.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PageFooter from "../components/navigation/PageFooter.jsx";
import { Box } from "@chakra-ui/react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Box display={"grid"} minH="vh" gridTemplateRows="auto 1fr auto">
        <PageHeader />
        <Box as={"main"}>
          <Outlet />
        </Box>
        <PageFooter />
      </Box>

      <TanStackRouterDevtools position="bottom-left" />
      <ReactQueryDevtools />
    </>
  );
}
