import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Navbar from "./Navbar";

const RQSuperHeroes = () => {
  const fetchData = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const { isLoading, data, error } = useQuery("super-heroes", fetchData);
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <Navbar />
      <h2>RQ Super Heroes</h2>
      {data?.data.map((hero) => {
        return <div key={hero.id}> 👀 {hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHeroes;
