import { useStore } from "@nanostores/react";

import { router } from "@/components/Router/router.ts";
import { SwapContainer } from "@/pages";

export const Router = () => {
  const page = useStore(router);

  switch (page?.route) {
    case "home":
      return <SwapContainer />;
    // case "login":
    //   return <LoginContainer />;
    default:
      return <>404</>;
  }
};
