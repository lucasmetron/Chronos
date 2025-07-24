import { Bounce, ToastContainer } from 'react-toastify';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
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
  </StrictMode>,
);
