import axios from "axios";
import { ApiContext } from "./ApiContext";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

const ApiContextProvider = ({ children }) => {
  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
