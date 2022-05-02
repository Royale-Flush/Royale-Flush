const orderRouter = require("express").Router();
const { Order } = require("../db/index");
const { auth } = require("./utils");

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

// check route path below...
orderRouter.get("/:customerId/order", async (req, res, next) => {
  const { customerId } = req.params;
  console.log("What is the customer ID from order coming back as", customerId);
  try {
    const order = await Order.getCartByCustomerId(customerId);
    res.send(order);
  } catch ({ name, message }) {
    next({ name: "Error", message: "Error retrieving your order" });
  }
});

orderRouter.post("/", async (req, res, next) => {
  const { customerId, totalAmount } = req.body;
  try {
    const newOrder = await Order.createOrders({ customerId, totalAmount });
    res.send(newOrder);
  } catch ({ name, message }) {
    next({ name: "Error", message: "Error creating order" });
  }
});

orderRouter.patch("/:orderId", auth, async (req, res, next) => {
  const { orderId } = req.params;
  const { totalAmount, isActive } = req.body;

  try {
    const editedOrder = await Order.editOrders({
      id: orderId,
      totalAmount,
      isActive,
    });
    res.send(editedOrder);
  } catch ({ name, message }) {
    next({ name: "Error", message: "Error editing order" });
  }
});

orderRouter.delete("/:orderId", auth, async (req, res, next) => {
  const id = req.params.orderId;
  try {
    await getOrdersByCustomerId(id);
    const deletedProduct = await Order.deleteOrders({ id });
    res.send(deletedProduct);
  } catch ({ name, message }) {
    next({ name: "Error", message: "Error deleting order" });
  }
});

module.exports = orderRouter;
