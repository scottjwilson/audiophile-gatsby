import React, { createContext, useState } from "react";

const defaultValues = {
  isCartOpen: false,
  cart: [],
  addProductToCart: () => {},
};

export const StoreContext = createContext(defaultValues);

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider values={defaultValues}>
      {children}
    </StoreContext.Provider>
  );
};
