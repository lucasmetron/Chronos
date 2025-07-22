import type { TaskModel } from '../../models/TaskModel';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
}

export type TaskActionModel =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | { type: TaskActionTypes.INTERRUPT_TASK }
  | { type: TaskActionTypes.RESET_STATE };
