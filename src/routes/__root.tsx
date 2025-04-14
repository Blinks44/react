import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import PageHeader from "../components/navigation/PageHeader.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PageFooter from "../components/navigation/PageFooter.tsx";
import { Box } from "@chakra-ui/react";

const RootComponent = () => {
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
};

export const Route = createRootRoute({
  component: RootComponent,
});
