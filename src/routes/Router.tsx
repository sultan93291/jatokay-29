import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  }
]);

export default router;