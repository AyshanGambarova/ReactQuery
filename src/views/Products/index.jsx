import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <>
      <Navbar />
      <h2>Products</h2>
      {data.map((product) => {
        return (
          <ul key={product.id}>
            <li>{product.title}</li>
          </ul>
        );
      })}
    </>
  );
};

export default Index;
