import React from "react";
import Navbar from "../../components/Navbar";
import { useProductsData } from "../../hooks/useProductsData";
import { Link } from "react-router-dom";

const Index = () => {
  const onSuccess = (data) => {
    console.log("Side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("Side effect after encountering error", error);
  };
  const { isLoading, data, isError, error, refetch, isFetching } =
    useProductsData(onSuccess, onError);
  if (isLoading || isFetching) return "Loading...";
  if (isError) return <h3>An error has occurred:{error.message}</h3>;
  return (
    <>
      <Navbar />
      <h2>RQ Products</h2>
      <button onClick={refetch}>Fetch Data</button>
      {data?.data?.products.map((product) => {
        return (
          <ul key={product.id}>
            <li><Link to={`/rq-products/${product.id}`}>{product.title}</Link></li>
          </ul>
        );
      })}

      {/* Selected data */}
      {/* {data?.map((title, index) => {
        return (
          <ul key={index}>
            <li><Link to="products/:id">{title}</Link></li>
          </ul>
        );
      })} */}
    </>
  );
};

export default Index;
