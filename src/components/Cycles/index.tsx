import type { JSX } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';

const Cycles = () => {
  const { state } = useTaskContext();
  const { currentCycle } = state;

  function returnCssCycle(i: number) {
    if (i === 8) {
      return styles.longBreakTime;
    }

    if (i % 2 === 0) {
      return styles.shortBreakTime;
    } else {
      return styles.worktime;
    }
  }

  function returnCycles() {
    if (currentCycle === 0) {
      return <p className={styles.noTask}>Inicie uma tarefa</p>;
    }
    const elements: JSX.Element[] = [];

    for (let i = 0; i < currentCycle; i++) {
      elements.push(
        <span
          key={i}
          className={`${styles.cycleDot} ${returnCssCycle(i + 1)}`}
        />,
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
