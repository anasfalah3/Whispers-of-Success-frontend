import { axiosClient } from "@/api/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  // const [isAuthenticated, _setIsAuthenticated] = useState('true' ===window.localStorage.getItem('AUTHENTICATED'));

  const csrf = () => axiosClient.get("/sanctum/csrf-cookie");
  const getUser = async () => {
    const { data } = await axiosClient.get("/api/user");
    setUser(data);
  };

  const login = async ({ ...data }) => {
    await csrf();
    setErrors([]);

    try {
      await axiosClient.post("/login", data);
      await getUser();
      navigate("/admin/dashboard");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const register = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    try {
      await axiosClient.post("/register", data);
      await getUser();
      navigate("/admin/dashboard");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  const logout = () => {
    axiosClient
      .post("/logout")
      .then(() => {
        setUser(null);
        navigate("/login");
      })
      .catch((e) => {
        setErrors(e.response.data.errors);
      });
  };
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  // const logout = () => {
  //   setUser({});
  //   setIsAuthenticated(false);
  // };
  // const setIsAuthenticated = (isAuthenticated) => {
  //     _setIsAuthenticated(isAuthenticated)
  //     window.localStorage.setItem('AUTHENTICATED', isAuthenticated)
  // };
  return (
    <AuthContext.Provider
      value={{
        user,
        errors,
        getUser,
        login,
        register,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
