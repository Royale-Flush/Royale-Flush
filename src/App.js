import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Cart, Inventory, Login, Logout, Register } from "./components";
import useAuth from "./hooks/useAuth";

function App() {
  const { user } = useAuth();
  return (
    <div>
      <header>
        <h3>Royal Flush Homepage</h3>
        <Link to="/">Home</Link>
        <Link to="/Inventory">Inventory</Link>
        {user.id ? (
          <>
            <Link to="/Logout">Logout</Link>
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
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
