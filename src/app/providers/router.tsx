import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "../../pages/landing/ui/Home";
import { NotFound } from "../../widgets/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
