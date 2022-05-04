import React, { useEffect, useState } from "react";
import { getAllProducts, getTag } from "../api/index";
import useCart from "../hooks/useCart";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const { addToOrder, cart, setCart } = useCart();

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
            <img
              className="productImage"
              src={product.imageUrl}
              alt="product image"
            />
            <h3 className="prodCont">Royale ID: {product.id}</h3>
            <h2 className="prodCont1">Royale Name: {product.name}</h2>
            <h3 className="prodCont2">Royale Price: {product.price}</h3>
            <button id="add" onClick={() => addToOrder(product.id, 1, cart.id)}>
              Add to Cart
            </button>
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Inventory;
