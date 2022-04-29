import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Cart, Inventory, Login, Logout, Register } from "./components";
import useAuth from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  console.log("The User in App.js:", user);
  return (
    <div>
      <header id="title01" className="navbar">
        <h3 id="mask" className="box">
          Royal Flush{" "}
        </h3>
        <Link className="hyperLink" to="/">
          Home
        </Link>
        <Link className="hyperLink" to="/Inventory">
          Inventory
        </Link>
        {user.id ? (
          <>
            <Logout />
            <Link className="hyperLink" to="/cart">
              Cart
            </Link>
          </>
        ) : (
          <>
            <Link className="hyperLink" to="/Login">
              Login
            </Link>
            <Link className="hyperLink" to="/signup">
              Sign Up
            </Link>
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
