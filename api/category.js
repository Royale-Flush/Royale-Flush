const catRouter = require("express").Router();
const { Categories } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../.env");
const { auth } = require("./utils");

catRouter.get("/", async (req, res, next) => {
  try {
    const everything = await Categories.getAllCategories();
    res.send({ everything });
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});

catRouter.post("/new", async (req, res, next) => {
  const { name, tags } = req.body;
  try {
    const newCat = await Categories.createCategories({ name, tags });
    res.send({ newCat });
  } catch ({ name, message }) {
    next({
      name: "Error",
      message: "Didn't make a new category",
    });
  }
});
// catRouter.post("/register", async (req, res, next) => {}

// catRouter.get("/register", async (req, res, next) => {}
// catRouter.post("/register", async (req, res, next) => {}
// catRouter.post("/register", async (req, res, next) => {}
// catRouter.get("/register", async (req, res, next) => {}
// catRouter.post("/register", async (req, res, next) => {}

module.exports = catRouter;
