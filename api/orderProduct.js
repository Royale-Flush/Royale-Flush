const opRouter = require("express").Router();
const { ProductOrder } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { auth } = require("./utils");

opRouter.post("/", async (req, res, next) => {
  const { productId, quantity, orderId } = req.body;
  try {
    const newOProd = await ProductOrder.addToOrder({
      productId,
      quantity,
      orderId,
    });
    res.send(newOProd);
  } catch ({ name, message }) {
    next({
      name: "Error",
      message: "cannot create new product order",
    });
  }
});

opRouter.patch("/", auth, async (req, res, next) => {
  const { quantity, productId, orderId } = req.body;
  try {
    const edit = await ProductOrder.editQuantity({
      productId,
      orderId,
      quantity,
    });
    res.send(edit);
  } catch ({ name, message }) {
    next({
      name: "Error",
      message: "cannot update product order",
    });
  }
});

opRouter.delete("/", auth, async (req, res, next) => {
  const { productId, orderId } = req.body;
  try {
    const remove = await ProductOrder.removeProduct({
      productId,
      orderId,
    });
    res.send(remove);
  } catch ({ name, message }) {
    next({
      name: "Error",
      message: "cannot remove product order",
    });
  }
});

module.exports = opRouter;
