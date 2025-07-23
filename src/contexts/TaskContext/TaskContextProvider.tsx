import { useLayoutEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { playRing } from '../../utils/functions';

interface TaskContextProvider {
  children: React.ReactNode;
}

export function TaskContextProvider({ children }: TaskContextProvider) {
  const worker = TimerWorkerManager.getInstance();
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useLayoutEffect(() => {
    if (!state.activeTask) {
      console.log('Stopping worker');
      worker.terminate();
    }

    worker.postMesage(state);

    worker.onmessage(event => {
      const countdown = event.data || 0;
      dispatch({ type: TaskActionTypes.REFRESH_COUNTER, payload: countdown });

      if (countdown <= 0) {
        worker.terminate();
        playRing();
        dispatch({ type: TaskActionTypes.COMPLETED_TASK });
      }
    });
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
