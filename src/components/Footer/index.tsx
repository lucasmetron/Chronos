import { Link } from 'react-router-dom';

import styles from './styles.module.css';
import { routes } from '../../router/routes';

const Footer = () => {
  return (
    <footer className={styles.heading}>
      <Link to={routes.about}>Entende como funciona a tecnica pomodoro 🍅</Link>
      <Link to={routes.home}>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com amor ❤️
      </Link>
    </footer>
  );
};

export default Footer;
