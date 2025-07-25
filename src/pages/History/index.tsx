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
  const { tasks } = state;
  console.log('✌️tasks --->', tasks);

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

    if (
      task.interruptDate === null &&
      task.completeDate === null &&
      state.activeTask
    ) {
      return 'Em andamento';
    }

    return 'Abandonada';
  }

  function returnTypeTask(status: TaskModel['type']) {
    if (status === 'workTime') {
      return 'Foco';
    }

    if (status === 'shortBreakTime') {
      return 'Descanso curto';
    }

    if (status === 'longBreakTime') {
      return 'Descanso longo';
    }

    return 'Erro';
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
        {state.tasks.length > 0 ? (
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
                {state.tasks.reverse().map(task => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} min</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{isTaskCompleted(task)}</td>
                      <td>{returnTypeTask(task.type)}</td>
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
