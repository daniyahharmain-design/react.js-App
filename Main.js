import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import AppLayout from "./AppLayout.js";
import Body from "./src/Components/Body.js";
import ErrorPage from "./src/Components/ErrorPage.js";
import Cart from "./src/Components/cart.js";
import Contact from "./src/Components/Contact.js";
import About from "./src/Components/About.js";
import RestaurantMenu from "./src/components/ResturantMenu.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },

  {
    path: "/menu/:restaurantId",
    element: <RestaurantMenu/>
  }
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
