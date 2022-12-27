import axios from "../utils/axios";
// import { AuthArgs } from '../redux/slices/authSlice';

const register = async ({ name, email, password }) => {
  const { data } = await axios.post("/registration", {
    name,
    email,
    password,
  });
  return data;
};
const login = async ({ email, password }) => {
  const { data } = await axios.post("/login", {
    email,
    password,
  });
  return data;
};

export default { register, login };
