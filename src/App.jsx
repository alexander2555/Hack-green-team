import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { MainPage } from "./pages/main-page/main-page";
import { Favorites } from "./pages/favorites/favorites";
import { TeamMember } from "./pages/team-member/team-member";
import { Error } from "./components/error/error";
import { ERROR } from "./constants";

import "./App.css";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "team-member/:id", element: <TeamMember /> },
        { path: "favorites", element: <Favorites /> },
        { path: "*", element: <Error error={ERROR.PAGE_NOT_EXIST} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
