import Router from "./route/Router";
import { ToastContainer } from 'react-toastify';
import { useLoading } from './context/LoadingContext';
import { useAuth } from './context/AuthContext';
import Spinner from './components/ui/Spinner';

function App() {
  const { loading } = useLoading();
  const { initialLoading } = useAuth();

  return (
    <>
      {loading && <Spinner />}
      <Router />
      <ToastContainer
        autoClose="2500"
        theme="colored"
        position="top-right"
      />
    </>
  );
}

export default App;
