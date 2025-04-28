import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root"; // Keep this eager
import Error from "../Pages/Error/Error";
import { lazy } from "react";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blogs from "../Pages/Blogs/Blogs";

const Home = lazy(() => import("../Pages/Home/Home"));
const LawyerDetails = lazy(() =>
  import("../Pages/LawyerDetails/LawyerDetails")
);
const MyBookings = lazy(() => import("../Pages/MyBookings/MyBookings"));

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
        path: "/lawyerDetails/:id",
        loader: () => fetch("/data/lawyer.json"),
        Component: LawyerDetails,
      },
      {
        path: "/my-bookings",
        loader: () => fetch("/data/lawyer.json"),
        Component: MyBookings,
      },
      {
        path: "/sign-in",
        Component: lazy(() => import("../Credential/SignIn/SignIn")),
      },
      {
        path: "/sign-up",
        Component: lazy(() => import("../Credential/SignUp/SignUp")),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact-us",
        Component: lazy(() => import("../Credential/SignUp/SignUp")),
      },
    ],
  },
]);
