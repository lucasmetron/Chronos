import type { TaskModel } from '../../models/TaskModel';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  COMPLETED_TASK = 'COMPLETED_TASK',
  REFRESH_COUNTER = 'REFRESH_COUNTER',
  RESET_STATE = 'RESET_STATE',
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
  | { type: TaskActionTypes.INTERRUPT_TASK }
  | { type: TaskActionTypes.COMPLETED_TASK }
  | { type: TaskActionTypes.RESET_STATE };
