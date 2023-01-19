import { useQuery } from "react-query";
import axios from "axios";
const fetchData = () => {
  return axios.get(`https://dummyjson.com/users`);
};

export const useUsersData = () => {
  return useQuery("users", fetchData, {});
};
