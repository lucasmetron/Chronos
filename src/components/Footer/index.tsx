import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.heading}>
      <a href=''>Entende como funciona a tecnica pomodoro 🍅</a>
      <a href=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com amor ❤️
      </a>
    </footer>
  );
};

export default Footer;
