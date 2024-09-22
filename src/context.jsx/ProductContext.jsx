import { createContext } from "react";

export const ProductContext = createContext([]);

export const ProductContextProvider = ({ children }) => {
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};
