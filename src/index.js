import { default as Auth } from "./components/AuthProvider";
import { default as Cart } from "./components/CartProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

createRoot(container).render(
  <Router>
    <Auth>
      <Cart>
        <App />
      </Cart>
    </Auth>
  </Router>
);
