import React, { useEffect, useState } from "react";
import { getAllProducts, getTag } from "../api/index";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await getAllProducts();
      setProducts(response);
    };
    getProducts();
  }, [setProducts]);

  return (
    <>
      <h1 className="inventoryHead">Royale Inventory</h1>
      <br />
      <br />

      {products.map((product, i) => {
        // the below section displays the individual products
        return (
          <div className="Product-Container" key={`product key, ${i}`}>
<<<<<<< HEAD
            <h1>{product.id}</h1>

            <h1>{product.name}</h1>

            <h1>{product.price}</h1>
=======
            <h3>Royale ID: {product.id}</h3>
            <h2 className="prodCont1">Royale Name: {product.name}</h2>
            <h3 className="prodCont2">Royale Price: {product.price}</h3>

>>>>>>> origin/main
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Inventory;
