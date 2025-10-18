import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './components/layout/layout';
import { TeamMember } from './pages/team-member/team-member';

import './App.css';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <div>MainPage</div> },
        { path: 'team-member/:id', element: <TeamMember /> },
        { path: 'favorites', element: <div>Favorites</div> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
