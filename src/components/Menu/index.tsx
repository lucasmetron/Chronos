import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <a className={styles.linkMenu}>
        <HouseIcon className={styles.icon} />
      </a>

      <a className={styles.linkMenu}>
        <HistoryIcon className={styles.icon} />
      </a>

      <a className={styles.linkMenu}>
        <SettingsIcon className={styles.icon} />
      </a>

      <a className={styles.linkMenu}>
        <SunIcon className={styles.icon} />
      </a>
    </div>
  );
};

export default Menu;
