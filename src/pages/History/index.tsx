import { Trash } from 'lucide-react';
import { toast } from 'react-toastify';

import Container from '../../components/Container';
import DefaultButton from '../../components/DefaultButton';
import Heading from '../../components/Heading';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import MainTemplate from '../../templates/MainTemplate';
import styles from './style.module.css';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import type { TaskModel } from '../../models/TaskModel';
import { formatDate } from '../../utils/functions';

const History = () => {
  const { state, dispatch } = useTaskContext();
  const tasks = [...state.tasks].reverse();

  const dictionaryType = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso longo',
  };

  function handleDeleteAllHistory() {
    toast.dismiss();
    toast.success('Histórico deletado com sucesso!');
    dispatch({ type: TaskActionTypes.DELETE_HISTORY });
  }

  function isTaskCompleted(task: TaskModel) {
    if (task.completeDate && task.interruptDate === null) {
      return 'Concluída';
    }

    if (task.interruptDate && task.completeDate === null) {
      return 'Interrompida';
    }

    if (task.id === state.activeTask?.id) {
      return 'Em andamento';
    }

    return 'Abandonada';
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          Histórico
          <div className={styles.containerBtn}>
            <DefaultButton icon={<Trash />} onClick={handleDeleteAllHistory} />
          </div>
        </Heading>
      </Container>

      <Container>
        {tasks.length > 0 ? (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {tasks.map(task => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{isTaskCompleted(task)}</td>
                      <td>{dictionaryType[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className={styles.noData}>
            Você ainda não possui histórico de tarefas.
          </p>
        )}
      </Container>
    </MainTemplate>
  );
};

export default History;
