import type { JSX } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';

const Cycles = () => {
  const { state } = useTaskContext();
  const { currentCycle } = state;

  function returnCssCycle(i: number) {
    if (i === 7) {
      return styles.longBreakTime;
    }

    if (i % 2 === 0) {
      return styles.shortBreakTime;
    } else {
      return styles.worktime;
    }
  }

  function returnCycles() {
    const elements: JSX.Element[] = [];

    for (let i = 0; i < currentCycle; i++) {
      elements.push(
        <span key={i} className={`${styles.cycleDot} ${returnCssCycle(i)}`} />,
      );
    }

    return elements;
  }

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>{returnCycles()}</div>
    </div>
  );
};

export default Cycles;
