import React from "react";
import { createProduct } from "../api/index";

const Inventory = () => {
  const { user, isLoggedIn, setIsLoggedIn } = useAuth();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div>
      <h2>Hello</h2>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await createProduct(name, price);
              console.log("111111", response);
              //check if response works
              setIsLoggedIn(true);
            } catch (error) {
              console.error("Username and password does not exist.", error);
            }
          }}
        >
          <input
            type="text"
            value={name}
            placeholder="Name of New Toilet:"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            type="text"
            value={price}
            placeholder="Price:"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">New Toilet</button>
        </form>
      </div>

      <div
        style={{
          display: isLoggedIn ? "block" : "none",
        }}
      >
        <h3>WELCOME BACK {`${username}`}!</h3>
      </div>
    </div>
  );
};
export default Inventory;
