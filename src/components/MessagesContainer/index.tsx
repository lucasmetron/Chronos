import { Bounce, ToastContainer } from 'react-toastify';

const MessagesContainer = () => {
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
      theme='light'
      transition={Bounce}
    />
  );
};

export default MessagesContainer;
