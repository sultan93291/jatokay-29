import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/about/about/About";
import Contact from "@/pages/contact/contact/Contact";
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
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ],
  }
]);

export default router;