const userRouter = require("express").Router();
const { Customer } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../.env");
const { auth } = require("./utils");

userRouter.get("/", async (req, res, next) => {
  try {
    const everyone = await Customer.getAllUsers();
    res.send({ everyone });
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});
