import type { TaskModel } from '../models/TaskModel';

export function getNextCycle(cycle: number) {
  return cycle === 0 || cycle === 8 ? 1 : cycle + 1;
}

export function getNextCycleType(cycle: number): TaskModel['type'] {
  if (cycle === 8) return 'longBreakTime';
  if (cycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}
