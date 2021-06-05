import React from "react";

import { StoreProvider } from "./src/contexts/StoreContext";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
);
