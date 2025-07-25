import { useState } from 'react';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { toast } from 'react-toastify';

import styles from './styles.module.css';
import DefaultInput from '../DefaultInput';
import Cycles from '../Cycles';
import DefaultButton from '../DefaultButton';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycle, getNextCycleType } from '../../utils/functions';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import ShowCycleMessage from '../ShowCycleMessage';

const MainForm = () => {
  const { state, dispatch } = useTaskContext();

  const [taskName, setTaskNAme] = useState(
    state.tasks[state.tasks.length - 1]?.name || '',
  );

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function createNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.dismiss();

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
    toast.success('Timer iniciado');
    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleStopTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.dismiss();
    toast.error('Timer interrompido');

    dispatch({
      type: TaskActionTypes.INTERRUPT_TASK,
    });
  }

  return (
    <form
      onSubmit={state.activeTask === null ? createNewTask : handleStopTask}
      className={styles.form}
      action=''
    >
      <div className={styles.formRow}>
        <DefaultInput
          id='task'
          type='text'
          labelText='Task'
          placeholder='Digite algo'
          value={taskName}
          onChange={e => setTaskNAme(e.target.value)}
          disabled={state.activeTask !== null}
        />
      </div>

      <div className={styles.formRow}>
        <ShowCycleMessage />
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton
          color={state.activeTask === null ? 'green' : 'red'}
          icon={
            state.activeTask === null ? <PlayCircleIcon /> : <StopCircleIcon />
          }
        />
      </div>
    </form>
  );
};

export default MainForm;
