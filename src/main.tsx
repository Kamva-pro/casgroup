import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./app/App.tsx";
import { CatalogPage } from "./app/pages/CatalogPage";
import { NotFound } from "./app/components/NotFound";
import "./styles/index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/products/catalog", element: <CatalogPage /> },
  { path: "*", element: <NotFound /> }
], {
  basename: import.meta.env.BASE_URL
});

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);