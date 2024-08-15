import { ToastContainer } from 'react-toastify';

const Toast = () => {
  return (
    <ToastContainer
      hideProgressBar
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="light"
      limit={5}
    />
  );
};

export default Toast;
