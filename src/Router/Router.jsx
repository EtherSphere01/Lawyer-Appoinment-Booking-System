import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root/Root";
import Error from "../Pages/Error/Error";
import Header from "../components/Header/Header";
import Home from "../Pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
