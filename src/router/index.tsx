import { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';

import Home from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { AboutPomodoro } from '../pages/AboutPomodoro';
import Settings from '../pages/Settings';
import History from '../pages/History';
import { routes } from './routes';

const ScrollTop = () => {
  //hacker para esse componente ser filho de BrowserRouter
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.history} element={<History />} />
        <Route path={routes.settings} element={<Settings />} />
        <Route path={routes.about} element={<AboutPomodoro />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>

      <ScrollTop />
    </BrowserRouter>
  );
};

export default Router;
