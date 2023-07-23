import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../app/store';
import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { resetNotification } from '../../features/notifSlice';

const ToastLayout = ({ children }) => {
    const { showNotif, error, success } = useSelector((state: RootState) => state.notif);
    const dispatch = useAppDispatch();
    const notify = () => { toast.success('The operation was successfully completed', {
      theme: "colored",
    });
    }
    const notifyError = () => { toast.error('The operation was not successfully completed', {
      theme: "colored",
    });
    }

    useEffect(() => {
        if (showNotif && success) {
            notify();
            dispatch(resetNotification());
        }
        if (showNotif && error) {
            notifyError();
            dispatch(resetNotification());
        }

    },[showNotif])
    
  return (
      <>
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
          />
          {children}
      </>
  )
}

export default ToastLayout