import axios from "axios";
import { useState } from "react";
import { LoginContext } from "./LoginContext";
import { useNavigate } from "react-router-dom";

const LoginProvider = ({ children }) => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = (credentials) => {
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", credentials)
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
        setIsLoggedIn(true);
        navigate('/')
      })
      .catch((err) => {
        alert('wrong credentials')
        console.log(err)
      });
  };
  return (
    <LoginContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
