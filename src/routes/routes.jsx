import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/pages/error/ErrorPage";
import Home from "@/pages/public/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
