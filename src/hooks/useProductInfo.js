import { useQuery } from "react-query";
import axios from "axios";
const fetchData = ({ queryKey }) => {
  const productId = queryKey[1];
  return axios.get(`https://dummyjson.com/products/${productId}`);
};

export const useProductData = (productId) => {
  return useQuery(["product", productId], fetchData);
};
