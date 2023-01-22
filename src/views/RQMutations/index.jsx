import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useProductsData,useAddProductData } from "../../hooks/useProductsData";

const Index = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    brand: "",
    category: "",
  });
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const { mutate: addProduct, isError, error, data } = useAddProductData();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(product);
    addProduct(product);
    setProduct({
      title: "",
      description: "",
      brand: "",
      category: "",
    });
  }
  return (
    <>
      <Navbar />
      <h1>RQ Mutations</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            name="brand"
            id="brand"
            value={product.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="category">Choose a pet:</label>
          <select
            name="category"
            id="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Please choose an option
            </option>
            <option value="Smartphones">Smartphones</option>
            <option value="Laptops">Laptops</option>
            <option value="Fragrances">Fragrances</option>
            <option value="Skincare">Skincare</option>
          </select>
        </div>
        <button>Add product</button>
      </form>
      {data?.data && (
        <ul>
          <li>Title:{data?.data?.title}</li>
          <li>Description:{data?.data?.description}</li>
          <li>Brand:{data?.data?.brand}</li>
          <li>Category:{data?.data?.category}</li>
        </ul>
      )}
    </>
  );
};

export default Index;
