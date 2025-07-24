import './styles/global.css';
import './styles/theme.css';
import 'react-toastify/dist/ReactToastify.css';

import Router from './router';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import MessagesContainer from './components/MessagesContainer';

function App() {
  return (
    <TaskContextProvider>
      <Router />;
      <MessagesContainer />
    </TaskContextProvider>
  );
}

export default App;
