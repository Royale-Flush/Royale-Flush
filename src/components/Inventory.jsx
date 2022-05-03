import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/index";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts();
      setProducts(response);
    };
    getProducts();
  }, [setProducts]);
  console.log("Products:", products);
  return (
    <>
      <h1>TOILETS!!!! GET YOUR TOILETS HERE!</h1>
      <br />
      <br />
      {products.map((product, i) => {
        // the below section displays the individual products
        return (
          <div className="Product-Container" key={`product key, ${i}`}>
            <h1>{product.id}</h1>

            <h1>{product.name}</h1>

            <h1>{product.price}</h1>

            <br />
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Inventory;
