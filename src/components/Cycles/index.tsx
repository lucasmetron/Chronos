import styles from './styles.module.css';

const Cycles = () => {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        <span className={`${styles.cycleDot} ${styles.worktime}`} />
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`} />
        <span className={`${styles.cycleDot} ${styles.worktime}`} />
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`} />
        <span className={`${styles.cycleDot} ${styles.worktime}`} />
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`} />
        <span className={`${styles.cycleDot} ${styles.worktime}`} />
        <span className={`${styles.cycleDot} ${styles.longBreakTime}`} />
      </div>
    </div>
  );
};

export default Cycles;
