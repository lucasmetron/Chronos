import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes, getNextCycle } from '../../utils/functions';
import type { TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case 'START_TASK': {
      const newTask: TaskModel = action.payload;
      const secondsRemaining = newTask.duration * 60;
      const nextCycle = getNextCycle(state.currentCycle);

      return {
        ...state,
        activeTask: newTask,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        currentCycle: nextCycle,
        tasks: [...state.tasks, newTask],
      };
    }

    case 'INTERRUPT_TASK': {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }

    case 'COMPLETED_TASK': {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }

    case 'REFRESH_COUNTER': {
      return {
        ...state,
        secondsRemaining: action.payload,
        formattedSecondsRemaining: formatSecondsToMinutes(action.payload),
      };
    }

    case 'SET_SETTINGS_TIME': {
      return {
        ...state,
        config: {
          ...state.config,
          ...action.payload,
        },
      };
    }

    case 'RESET_STATE':
      return {
        ...state,
      };
    default:
      return state;
  }
}
