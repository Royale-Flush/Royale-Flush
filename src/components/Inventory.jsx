import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/index";
const Inventory = ({ products, setProducts }) => {
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
        <h1>Products</h1>
      </>
    );
  };
};

// import React, { useEffect, useState } from "react";
// import { getAllProducts } from "../api/index";
// // import { SingleRoutine, NewRoutine } from "./";

// const Inventory = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const getProducts = async () => {
//       const response = await getAllProducts();
//       setProducts(response);
//     };
//     getProducts();
//   }, [setProducts]);
//   return(
//     <div className="container">
//       <div className="product-page">
//         {products.map((products, i) => {
//           return <Inventory key={i} products={products} />;
//         })}
//       </div>
//     </div>
//   );
// };
export default Inventory;
