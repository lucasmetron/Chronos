import { ToastContainer, Bounce } from 'react-toastify';

import './styles/global.css';
import './styles/theme.css';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

function App() {
  return (
    <TaskContextProvider>
      <Home />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </TaskContextProvider>
  );
}

export default App;
