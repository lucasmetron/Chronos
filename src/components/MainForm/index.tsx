import { useState } from 'react';
import { PlayCircleIcon } from 'lucide-react';

import styles from './styles.module.css';
import DefaultInput from '../DefaultInput';
import Cycles from '../Cycles';
import DefaultButton from '../DefaultButton';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

const MainForm = () => {
  const { setState } = useTaskContext();
  const [taskName, setTaskNAme] = useState('');

  function createNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState(prevState => ({
      ...prevState,
      currentCycle:
        prevState.currentCycle === 8 ? 0 : prevState.currentCycle + 1,
    }));
  }
  return (
    <form onSubmit={createNewTask} className={styles.form} action=''>
      <div className={styles.formRow}>
        <DefaultInput
          id='task'
          type='text'
          labelText='Task'
          placeholder='Digite algo'
          value={taskName}
          onChange={e => setTaskNAme(e.target.value)}
        />
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
};

export default MainForm;
