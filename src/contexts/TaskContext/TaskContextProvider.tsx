import { useLayoutEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { playRing } from '../../utils/functions';
import type { TaskStateModel } from '../../models/TaskStateModel';

interface TaskContextProvider {
  children: React.ReactNode;
}

function returnInitialState(): TaskStateModel {
  const stateSaved = localStorage.getItem('chronos:taskState');

  if (typeof stateSaved === 'string') {
    const state = JSON.parse(stateSaved) as TaskStateModel;
    return {
      ...state,
      secondsRemaining: 0,
      activeTask: null,
      formattedSecondsRemaining: '00:00',
    };
  }
  return initialTaskState;
}

export function TaskContextProvider({ children }: TaskContextProvider) {
  const worker = TimerWorkerManager.getInstance();
  const [state, dispatch] = useReducer(taskReducer, returnInitialState());

  useLayoutEffect(() => {
    if (!state.activeTask) {
      worker.terminate();
    }

    //altera o title da página com base no estado da tarefa ativa
    document.title = state.activeTask
      ? `Chronos - ${state.formattedSecondsRemaining}`
      : 'Chronos Pomodoro';

    //envia o estado atual para o worker
    worker.postMesage(state);

    //escuta as mensagens do worker
    worker.onmessage(event => {
      const countdown = event.data || 0;

      if (countdown <= 0) {
        worker.terminate();
        playRing();
        dispatch({ type: TaskActionTypes.COMPLETED_TASK });
      } else {
        dispatch({ type: TaskActionTypes.REFRESH_COUNTER, payload: countdown });
      }
    });
  }, [state, worker]);

  //salva tudo no localStorage quando o estado muda
  useLayoutEffect(() => {
    localStorage.setItem('chronos:taskState', JSON.stringify(state));
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
