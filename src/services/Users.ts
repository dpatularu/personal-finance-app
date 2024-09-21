import axios from "axios";

export const getUsers = async () => {
  const endpoint = `${import.meta.env.VITE_API_URL}/users`;
  const response = await axios.get(endpoint);
  return response;
};
