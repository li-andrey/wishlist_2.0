import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:3100/api/" });

instance.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default instance;
