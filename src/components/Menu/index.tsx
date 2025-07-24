import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

import styles from './styles.module.css';
import { routes } from '../../router/routes';

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
      <Link
        to={routes.home}
        className={styles.linkMenu}
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon className={styles.icon} />
      </Link>

      <Link
        to={routes.history}
        className={styles.linkMenu}
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon className={styles.icon} />
      </Link>

      <Link
        to={routes.settings}
        className={styles.linkMenu}
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon className={styles.icon} />
      </Link>

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
