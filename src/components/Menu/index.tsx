import { useLayoutEffect, useState } from 'react';
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

import styles from './styles.module.css';
import { routes } from '../../router/routes';
import RouterLink from '../RouterLink';

type ThemeProps = 'dark' | 'light';

const Menu = () => {
  const themeLocalStorage = 'theme';
  const [theme, setTheme] = useState<ThemeProps>(() => {
    const theme =
      (localStorage.getItem(themeLocalStorage) as ThemeProps) || 'dark';
    return theme === null ? 'dark' : theme;
  });

  function handleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(themeLocalStorage, theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        to={routes.home}
        className={styles.linkMenu}
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon className={styles.icon} />
      </RouterLink>

      <RouterLink
        to={routes.history}
        className={styles.linkMenu}
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon className={styles.icon} />
      </RouterLink>

      <RouterLink
        to={routes.settings}
        className={styles.linkMenu}
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon className={styles.icon} />
      </RouterLink>

      <a
        className={styles.linkMenu}
        aria-label='Mudar tema'
        title='Mudar tema'
        href='#'
        onClick={event => handleTheme(event)}
      >
        {theme === 'dark' ? (
          <SunIcon className={styles.icon} />
        ) : (
          <MoonIcon className={styles.icon} />
        )}
      </a>
    </nav>
  );
};

export default Menu;
