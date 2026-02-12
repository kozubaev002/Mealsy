import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../pages/landing/index";
import { Home } from "../../pages/landing/ui/Home";
import { NotFound } from "../../widgets/notFound/NotFound";
import { Befstragenow } from '../../pages/components/Katalogresepts/befstragenof/Befstragenow'
import { CatalogRecipes } from '../../pages/components/Katalogresepts/catalog/CatalogRecipes'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipe/befstragenow", 
        element: <Befstragenow/>,
      },
      {
        path: "catalog/recipes", 
        element: <CatalogRecipes/>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);