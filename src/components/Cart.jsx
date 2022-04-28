import React, { useState, useEffect } from "react";
import { getCart } from "../api";
import useAuth from "../hooks/useAuth";

const Cart = () => {
  const [newCart, setNewCart] = useState([]);
  const { cart, isLoggedIn } = useAuth();

  useEffect(() => {
    const renderCustomerCart = async () => {
      const results = await getCart();
      setNewCart(cart);
    };
    renderCustomerCart();
  }, []);
};

//  <---- may delete below, saved for reference

//   useEffect(() => {
//     const cartItems = cart.filter((item) => {
//       return item == true;
//     });
//     setNewCart(cart);
//   }, [isLoggedIn]);

//   return (
//     <div>
//       {profile && profile.messages.length > 0 ? (
//         profile.messages.map((message) => {
//           return (
//             <div>
//               <h2> New Message About: {message.post.title}</h2>
//               <h4>User: {message.fromUser.username}</h4>
//               <h4>Message :{message.content}</h4>
//             </div>
//           );
//         })
//       )
// };

export default Cart;
