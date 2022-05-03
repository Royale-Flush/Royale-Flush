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
      <h1 className="inventoryHead">Royale Inventory</h1>
      <br />
      <br />

      {products.map((product, i) => {
        // the below section displays the individual products
        return (
          <div className="Product-Container" key={`product key, ${i}`}>
            <h3 className="prodCont">Royale ID: {product.id}</h3>
            <h2 className="prodCont1">Royale Name: {product.name}</h2>
            <h3 className="prodCont2">Royale Price: {product.price}</h3>

            <br />
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Inventory;
