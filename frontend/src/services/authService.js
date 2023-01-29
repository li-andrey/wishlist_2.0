import myAxios from "../utils/axios";
import axios from "axios";

const register = async ({ name, email, password }) => {
  const { data } = await myAxios.post("/registration", {
    name,
    email,
    password,
  });
  return data;
};

const login = async ({ email, password }) => {
  const { data } = await myAxios.post("/login", {
    email,
    password,
  });
  return data;
};

const logout = async () => {
  const response = await myAxios.post("/logout");
  return response;
};

const checkAuth = async () => {
  const response = await axios.get("/refresh", {
    withCredentials: true,
    baseURL: "http://localhost:3100/api/",
  });
  return response;
};

export default { register, login, logout, checkAuth };
