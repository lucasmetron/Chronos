import { Bounce, ToastContainer } from 'react-toastify';
type ThemeProps = 'dark' | 'light';

const MessagesContainer = () => {
  const theme =
    localStorage.getItem('theme') || ('dark' as ThemeProps) || 'dark';

  return (
    <ToastContainer
      position='top-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme === 'dark' ? 'light' : 'dark'}
      transition={Bounce}
    />
  );
};

export default MessagesContainer;
