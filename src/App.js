import Router from "./route/Router";
import { useLoading } from './context/LoadingContext';
import { useAuth } from './context/AuthContext';

function App() {
  const { loading } = useLoading();
  const { initialLoading } = useAuth();

  return (
    
    <Router />


  );
}

export default App;
