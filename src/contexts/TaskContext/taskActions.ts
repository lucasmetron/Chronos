import type { TaskModel } from '../../models/TaskModel';
import type { initialTaskState } from './initialTaskState';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  COMPLETED_TASK = 'COMPLETED_TASK',
  REFRESH_COUNTER = 'REFRESH_COUNTER',
  RESET_STATE = 'RESET_STATE',
  SET_SETTINGS_TIME = 'SET_SETTINGS_TIME',
  LOAD_TASK = 'LOAD_TASK',
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.REFRESH_COUNTER;
      payload: number;
    }
  | {
      type: TaskActionTypes.SET_SETTINGS_TIME;
      payload: typeof initialTaskState.config;
    }
  | {
      type: TaskActionTypes.LOAD_TASK;
      payload: typeof initialTaskState;
    }
  | { type: TaskActionTypes.INTERRUPT_TASK }
  | { type: TaskActionTypes.COMPLETED_TASK }
  | { type: TaskActionTypes.RESET_STATE };
