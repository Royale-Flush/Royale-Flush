import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import { Home, Cart, Inventory, Login, Logout, Register } from "./components";
import useAuth from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <div>
      <header id="title01" className="mainRFLogoAnimation">
        <h3 id="mask" className="box">
          Royale Flush{" "}
        </h3>
      </header>

      <nav className="navbar">
        <div>
          <Link className="hyperLink" to="/">
            Home
          </Link>
          <Link className="hyperLink" to="/Inventory">
            Inventory
          </Link>
          {user.id ? (
            <>
              <Link className="hyperLink" to="/cart">
                Cart
              </Link>

              <Logout className="logoutButton" to="/logout" />
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
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
