const orderRouter = require("express").Router();
const { Order } = require("./models");

orderRouter.get("/", async (req, res, next) => {
  const { isActive } = req.body;
  const newOrders = {
    isActive: isActive,
  };
  try {
    const getAllOrders = await Order.getAllActiveOrders({ isActive });
    res.send({
      getAllOrders,
    });
  } catch ({ name, message }) {
    next({ name: "Error", message: "No active order found" });
  }
});

orderRouter.post("/", (req, res, next) => {
  res.send({});
});

module.exports = orderRouter;
