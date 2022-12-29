import axios from "../utils/axios";

const fetchUsers = async () => {
  const { data } = await axios.get("/users");
  return data;
};

export default { fetchUsers };
