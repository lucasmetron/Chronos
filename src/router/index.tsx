import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { AboutPomodoro } from '../pages/AboutPomodoro';
import Settings from '../pages/Settings';
import History from '../pages/History';
import { routes } from './routes';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.history,
    element: <History />,
  },
  {
    path: routes.settings,
    element: <Settings />,
  },
  {
    path: routes.about,
    element: <AboutPomodoro />,
  },
  {
    path: routes.notFound,
    element: <NotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
