import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Cart, Inventory, Login, Logout, Register } from "./components";
import useAuth from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  console.log("The User in App.js:", user);
  return (
    <div>
      <header>
        <h3>Royal Flush Homepage</h3>
        <Link to="/">Home</Link>
        <Link to="/Inventory">Inventory</Link>
        {user.id ? (
          <>
            <Logout />
            <Link to="/cart">Cart</Link>
          </>
        ) : (
          <>
            <Link to="/Login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
