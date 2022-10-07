import { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../api/authApi';
import * as userService from '../api/profileImageApi';



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

  const register = async input => {
    const res = await authService.register(input);
    addAccessToken(res.data.token);
    await getMe();
  }

  const login = async input => {
    const res = await authService.login(input);
    addAccessToken(res.data.token);
    await getMe();
  }

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };

  const updateMe = async payload => {
    await authService.updateMe(payload);
    await getMe();
  }

  const logout = async () => {
    setUser(null);
    removeAccessToken();
  }

  const updateProfileImg = async (input) => {
    const res = await userService.updateProfileImg(input);
    setUser(res.data.user);
  };


  return (
    <AuthContext.Provider value={{ user, login, logout, register, updateMe, initialLoading, updateProfileImg }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;