import AdminApi from "@/services/Api/Admin/AdminApi";
import { createContext, useContext, useState } from "react";

export const UserStateContext = createContext({
  user: {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUser: () => {},
  login: (email, password) => {},
  logout: () => {},
});
export default function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [isAuthenticated, _setIsAuthenticated] = useState(window.localStorage.getItem('AUTHENTICATED'));
  const login = async (email, password) => {
    await AdminApi.getCsrfToken();
    return AdminApi.login(email, password);
  };
  const logout = () => {
    setUser({});
    _setIsAuthenticated(false);
  };
  const setIsAuthenticated = (isAuthenticated) => {
      _setIsAuthenticated(isAuthenticated)
      window.localStorage.setItem('AUTHENTICATED', isAuthenticated)
  };
  return (
    <UserStateContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        isAuthenticated,
        setIsAuthenticated,
      }}>
      {children}
    </UserStateContext.Provider>
  );
}

export const useUserContext = () => useContext(UserStateContext);
