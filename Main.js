import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import Body from "./src/Components/Body.js";
import Contact from "./src/Components/Contact.js";
import Cart from "./src/Components/cart.js";
import AppLayout from "./AppLayout.js";
import About from "./src/Components/About.js";
import RestaurantMenu from "./src/components/ResturantMenu.js";
import ErrorPage from "./src/components/ErrorPage.js";

// import Grocery from "./src/components/Grocery.js";

import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./src/components/Grocery.js"));

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
      {
        path: "/menu/:restaurantId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Grocery Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
