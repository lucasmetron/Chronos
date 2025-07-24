import { Save } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './style.module.css';
import DefaultButton from '../../components/DefaultButton';
import DefaultInput from '../../components/DefaultInput';
import MainTemplate from '../../templates/MainTemplate';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import type { initialTaskState } from '../../contexts/TaskContext/initialTaskState';
import { routes } from '../../router/routes';

const Settings = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useTaskContext();
  const [dataForm, setDataForm] = useState<typeof initialTaskState.config>(
    state.config,
  );

  function handleSaveSettings() {
    if (
      dataForm.workTime < 1 ||
      dataForm.shortBreakTime < 1 ||
      dataForm.longBreakTime < 1
    ) {
      toast.warning(
        'Os tempos devem ser maiores que 0. Por favor, verifique os valores.',
      );
      return;
    }

    toast.success('Configurações salvas com sucesso!');
    dispatch({
      type: TaskActionTypes.SET_SETTINGS_TIME,
      payload: dataForm,
    });

    navigate(routes.home);
  }

  return (
    <MainTemplate>
      <div className={styles.container}>
        <h1>Configurações</h1>
        <p style={{ paddingBottom: '1.5rem' }}>
          Configure os minutos para as etapas do Pomodoro.
        </p>

        <DefaultInput
          id='work'
          labelText='Foco (min):'
          type='number'
          value={dataForm.workTime}
          onChange={e => {
            setDataForm({
              ...dataForm,
              workTime: Number(e.target.value),
            });
          }}
        />
        <DefaultInput
          id='shortBreak'
          value={dataForm.shortBreakTime}
          labelText='Descanso curto (min):'
          type='number'
          onChange={e => {
            setDataForm({
              ...dataForm,
              shortBreakTime: Number(e.target.value),
            });
          }}
        />
        <DefaultInput
          id='longBreak'
          value={dataForm.longBreakTime}
          labelText='Descanso longo (min):'
          type='number'
          onChange={e => {
            setDataForm({
              ...dataForm,
              longBreakTime: Number(e.target.value),
            });
          }}
        />

        <DefaultButton icon={<Save />} onClick={handleSaveSettings} />
      </div>
    </MainTemplate>
  );
};

export default Settings;
