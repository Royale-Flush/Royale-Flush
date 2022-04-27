const { Categories, Product, ProductOrder } = require("../db/index");
const catRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { auth } = process.env;

catRouter.get("/", async (req, res, next) => {
  try {
    const everything = await Categories.getAllCategories();
    console.log(everything);
    res.send(everything);
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});

module.exports = catRouter;
