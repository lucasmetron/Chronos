import type { TaskModel } from '../models/TaskModel';

export function getNextCycle(cycle: number) {
  return cycle === 0 || cycle === 8 ? 1 : cycle + 1;
}

export function getNextCycleType(cycle: number): TaskModel['type'] {
  if (cycle === 8) return 'longBreakTime';
  if (cycle % 2 === 0) return 'shortBreakTime';
  return 'workTime';
}

export function formatSecondsToMinutes(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const formattedMins = String(mins).padStart(2, '0');
  const formattedSecs = String(secs).padStart(2, '0');

  return `${formattedMins}:${formattedSecs}`;
}

export function playRing() {
  const audio = new Audio('/ring.mp3');
  audio.play().catch(error => {
    console.error('Error playing sound:', error);
  });
}
