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
      //  className={'toast-container'} // Info: (20240725 - Liz) 使用自定義樣式調整 toast container
    />
  );
};

export default Toast;
