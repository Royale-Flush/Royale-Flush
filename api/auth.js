const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const authRouter = require("express").Router();
const { Customer } = require("../db/index");
const { auth } = require("./utils");
const count = 10;

authRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password, name, address, email, phone, payment } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, count);
    const user = await Customer.createUser({
      username,
      password: hashedPassword,
      name,
      address,
      email,
      phone,
      payment,
    });
    console.log(user);
    delete user.password;

    const token = jwt.sign(user, JWT_SECRET);
    console.log("token", token);
    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    console.log("user", user);
    res.send(user);
  } catch (error) {
    next({
      name: "Error Creating new account",
      message: "Error Creating new account",
    });
  }
});

authRouter.post("/login", async (req, res, next) => {
  try {
    console.log("fsdfjcdcsc", login);
    const { username, password } = req.body;
    const user = await Customer.getUserByUsername(username);
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      delete user.password;
      const token = jwt.sign(user, JWT_SECRET);
      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });
      res.send(user);
    }
  } catch (error) {
    next(error);
  }
});

authRouter.get("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
});

authRouter.get("/me", auth, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});

module.exports = authRouter;
