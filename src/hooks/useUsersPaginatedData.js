import { useQuery } from "react-query";
import axios from "axios";
const fetchData = ({ queryKey }) => {
  let pageNumber = 0;
  if (queryKey[1] > 0) {
    pageNumber = queryKey[1] - 1;
  }
  pageNumber = queryKey[1] * 10;
  // const pageNumber = queryKey[1] * 10;
  return axios.get(`https://dummyjson.com/users?&skip=${pageNumber}&limit=10`);
};

export const useUsersPaginatedData = (pageNumber) => {
  return useQuery(["users", pageNumber], fetchData, {
    keepPreviousData: true,
  });
};
