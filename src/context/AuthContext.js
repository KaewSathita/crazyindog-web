import { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../api/authApi';


import { addAccessToken, getAccessToken, removeAccessToken } from '../utils/localStorage';


const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        if (getAccessToken()) {
          await getMe()
        }
      } catch (err) {
        console.log(err);
      } finally {
        setInitialLoading(false)
      }
    };
    fetchMe();
  }, []);

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };


  const login = async input => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    await getMe();
  }


  return (
    <AuthContext.Provider value={{ user, login, initialLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;