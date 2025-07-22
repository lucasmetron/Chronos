import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle, getNextCycleType } from '../../utils/functions';

const ShowCycleMessage = () => {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActive = {
    workTime: (
      <label>
        Foque por <b>{state.config.workTime}min</b>
      </label>
    ),
    shortBreakTime: (
      <label>
        Descanse por <b>{state.config.shortBreakTime}min</b>
      </label>
    ),
    longBreakTime: (
      <label>
        Descanso longo <b>{state.config.longBreakTime}min</b>
      </label>
    ),
  };

  const tipsForWhenUnactive = {
    workTime: (
      <label>
        Próximo ciclo é de <b>{state.config.workTime}min</b>
      </label>
    ),
    shortBreakTime: (
      <label>
        Próximo descanso é de <b>{state.config.shortBreakTime}min</b>
      </label>
    ),
    longBreakTime: (
      <label>
        Próximo descando será longo de <b>{state.config.longBreakTime}min</b>
      </label>
    ),
  };

  return (
    <div>
      {state.activeTask
        ? tipsForWhenActive[state.activeTask.type]
        : tipsForWhenUnactive[nextCycleType]}
    </div>
  );
};

export default ShowCycleMessage;
