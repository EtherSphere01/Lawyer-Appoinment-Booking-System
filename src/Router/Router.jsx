import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root"; // Keep this eager
import Error from "../Pages/Error/Error";
import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home/Home"));
const LawyerDetails = lazy(() =>
  import("../Pages/LawyerDetails/LawyerDetails")
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        loader: () => fetch("/data/lawyer.json"),
        Component: Home,
      },
      {
        path: "lawyerDetails/:id",
        loader: () => fetch("/data/lawyer.json"),
        Component: LawyerDetails,
      },
    ],
  },
]);
