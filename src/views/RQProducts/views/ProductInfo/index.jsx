import React from "react";
import { useParams } from "react-router-dom";
import { useProductData } from "./../../../../hooks/useProductInfo";

const Index = () => {
  const { productId } = useParams();
  const { isLoading, data, isError, error } = useProductData(productId);
  if (isLoading) return "Loading...";
  if (isError) return <h3>An error has occurred:{error.message}</h3>;
  console.log(data.data);

  return (
    <>
      <div>Product Info</div>
      <ul>
        <li>Title: {data.data.title}</li>
        <li>Brand: {data.data.brand}</li>
        <li>Category: {data.data.category}</li>
        <li>Description: {data.data.description}</li>
        <li>Price: ${data.data.price}</li>
      </ul>
    </>
  );
};

export default Index;
