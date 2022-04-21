const orderRouter = require("express").Router();
const { Order } = require("./models");
orderRouter.get("/", async (req, res, next) => {
  const { isACtive } = req.body;
  const newOrders = {
    isACtive: isACtive,
  };
  try {
    const getAllOrders = await Order.getAllActiveOrders(newOrders);
    res.send({
      getAllOrders,
    });
  } catch (error) {
    console.log(error);
  }
});

orderRouter.post("/", (req, res, next) => {
  res.send({});
});

module.exports = orderRouter;
