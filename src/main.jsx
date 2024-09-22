import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Products from "./Pages/Products.jsx";
import Cart from "./Pages/Cart.jsx";
import Success from "./Pages/Success.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductContextProvider } from "./context.jsx/ProductContext.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:category?",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  </StrictMode>
);
