import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import RouterLink from '../RouterLink';
import { routes } from '../../router/routes';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <RouterLink to={routes.home} className={styles.logoLink}>
        <TimerIcon className={styles.icon} />
        <span className={styles.title}>Chronos</span>
      </RouterLink>
    </div>
  );
};

export default Logo;
