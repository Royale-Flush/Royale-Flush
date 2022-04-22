const prodRouter = require("express").Router();
const { Product } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../.env");
const { auth } = require("./utils");


prodRouter.get("/", async (req, res, next) => {
  try {
    const everything = await Product.getAllProduct();
    res.send({ everything });
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});
prodRouter.get("/:categoryId/product", async (req, res, next) => {
  const { categoryId } = req.params;
    try {
    const product = await Product.getProductsByCategory({categoryId});
    res.send({ product });
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});



catRouter.post("/new", async (req, res, next) => {
  const { name, tags } = req.body;
  try {
    const newCat = await Product.createProduct({ name, tags });
    res.send({ newCat });
  } catch ({ name, message }) {
    next({
      name: "Error",
      message: "Didn't make a new category",
    });
  }
});