import { useInfiniteQuery } from "react-query";
import axios from "axios";
const fetchData = ({ pageParam = 1 }) => {
  let skip = 0;
  if (pageParam > 1) {
    skip = (pageParam - 1) * 10;
  }

  return axios.get(`https://dummyjson.com/quotes?limit=10&skip=${skip}`);
};

export const useQuotesData = () => {
  return useInfiniteQuery(["quotes"], fetchData, {
    getNextPageParam: (_lastPage, pages) => {
      console.log("_lastPage",_lastPage);
      let pagesCount=_lastPage.data.total/_lastPage.data.limit
      if (pages.length < pagesCount) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
};
