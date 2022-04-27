const prodRouter = require("express").Router();
const { Product } = require("../db/index");
const jwt = require("jsonwebtoken");
const { auth } = require("./utils");
const { JWT_SECRET } = process.env;

prodRouter.get("/", async (req, res, next) => {
  try {
    const everything = await Product.getAllProducts();
    res.send(everything);
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});
prodRouter.get("/:categoryId/product", async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    const product = await Product.getProductsByCategory({ categoryId });
    res.send(product);
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});

prodRouter.post("/", async (req, res, next) => {
  const { categoryId, name, price } = req.body;
  try {
    const newProd = await Product.createProduct({ categoryId, name, price });
    res.send(newProd);
  } catch ({ name, message }) {
    next({
      name: "Error",
      message: "Did not create new product",
    });
  }
});

// * NOT WORKING -------------
prodRouter.patch("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  const { name, price } = req.body;

  console.log(
    "Lets start by finding shit like id: ",
    id,
    "name: ",
    name,
    "price: ",
    price
  );

  try {
    const variable = await Product.EditProduct({
      id: id,
      name: name,
      price: price,
    });
    console.log(variable, "FROM PATCH REQUEST");
    res.send(variable);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

prodRouter.delete("/:productId", auth, async (req, res, next) => {
  const id = req.params.productId;
  try {
    // await getProductById(id)
    const deleteProduct = await Product.deleteProduct(id);

    res.send(deleteProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = prodRouter;
