import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import type { TaskActionModel } from './taskActions';

interface TaskContextProps {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
}

export const TaskContext = createContext<TaskContextProps>({
  state: initialTaskState,
  dispatch: () => {},
});
