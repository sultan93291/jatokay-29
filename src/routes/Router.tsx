import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/about/about/About";
import Blog from "@/pages/blog/blog/Blog";
import Contact from "@/pages/contact/contact/Contact";
import Financing from "@/pages/financing/financing/Financing";
import Home from "@/pages/home/home/Home";
import InShopRepairs from "@/pages/services/in-shop-repairs/InShopRepairs";
import MobileMechanic from "@/pages/services/mobile-mechanic/MobileMechanic";
import PainAndBody from "@/pages/services/paint-and-body/PainAndBody";
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
        path: "/financing",
        element: <Financing />,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/services/mobile-mechanic",
        element: <MobileMechanic />
      },
      {
        path: "/services/paint-and-body",
        element: <PainAndBody />
      },
      {
        path: "/services/in-shop-repairs",
        element: <InShopRepairs />
      },
      {
        path: "/blog",
        element: <Blog/>
      }
    ],
  }
]);

export default router;