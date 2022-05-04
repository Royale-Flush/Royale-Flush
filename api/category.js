const catRouter = require("express").Router();
const { Categories, Product, ProductOrder } = require("../db/index");
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

catRouter.get(`/tag`, async (req, res, next) => {
  const { id } = req.body;
  try {
    const tagName = await Categories.getCategoryById(id);
    res.send(tagName);
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});

module.exports = catRouter;
