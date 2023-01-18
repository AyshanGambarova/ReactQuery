import { useQuery } from "react-query";
import axios from "axios";
const fetchData = () => {
  return axios.get("https://dummyjson.com/products");
};

export const useProductsData = (onSuccess, onError) => {
  return useQuery("products", fetchData, {
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    // refetchInterval:2000,
    // refetchIntervalInBackground: true,
    //(Sehifeye daxil olanda request getmeyecek yalniz click olunduqda refetch olunacaq enabled false olanda)
    enabled: false,
    onSuccess,
    onError,
    //Datanin icinde sadece bize lazim olanlari secende selectden istf. edirik
    // select: (data) => {
    //   const productTitle = data?.data?.products.map((product) => product.title);
    //   return productTitle;
    // },
  });
};
