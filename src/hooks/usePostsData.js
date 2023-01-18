import { useQuery } from "react-query";
import axios from "axios";
const fetchData = () => {
  return axios.get("https://dummyjson.com/posts");
};

export const usePostsData = () => {
  return useQuery("posts", fetchData, {});
};
