import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import MainTemplate from '../../templates/MainTemplate';

const History = () => {
  const { state } = useTaskContext();
  const { tasks } = state;
  console.log('✌️tasks --->', tasks);

  return <MainTemplate>teste</MainTemplate>;
};

export default History;
