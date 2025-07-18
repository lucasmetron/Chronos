import { useState } from 'react';
import { PlayCircleIcon } from 'lucide-react';
import { toast } from 'react-toastify';

import styles from './styles.module.css';
import DefaultInput from '../DefaultInput';
import Cycles from '../Cycles';
import DefaultButton from '../DefaultButton';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import {
  formatSecondsToMinutes,
  getNextCycle,
  getNextCycleType,
} from '../../utils/functions';

const MainForm = () => {
  const { state, setState } = useTaskContext();

  const [taskName, setTaskNAme] = useState('');

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function createNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskName.trim() === '') {
      toast.error('Preencha a task');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => ({
      ...prevState,
      tasks: [...prevState.tasks, newTask],
      activeTask: newTask,
      secondsRemaining,
      formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
      currentCycle: nextCycle,
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
