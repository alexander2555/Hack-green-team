import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { MainPage } from "./pages/main-page/main-page";

import "./App.css";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "Alex", element: <div>Alex</div> },
        { path: "Aram", element: <div>Aram</div> },
        { path: "Vit", element: <div>Vit</div> },
        { path: "Dim", element: <div>Dim</div> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
