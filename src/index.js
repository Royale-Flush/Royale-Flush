import { default as Auth } from "./components/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

createRoot(container).render(
  <Router>
    <Auth>
      <App />
    </Auth>
  </Router>
);
