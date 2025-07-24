import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider.tsx';
import MessagesContainer from './components/MessagesContainer/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
      <MessagesContainer />
    </TaskContextProvider>
  </StrictMode>,
);
