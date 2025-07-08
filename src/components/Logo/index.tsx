import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink}>
        <TimerIcon className={styles.icon} />
        <span className={styles.title}>Chronos</span>
      </a>
    </div>
  );
};

export default Logo;
