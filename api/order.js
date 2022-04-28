const { editOrders, getOrdersByCustomerId, deleteOrders } = require("../db/models/orders");
const orderRouter = require("express").Router();
const { Order } = require("./models");
const { auth } = require("./utils");
const { JWT_SECRET } = process.env;

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
orderRouter.get("/:customerId/order", async (req, res, next ) => {
  const { customerId} = req.params; 
  try {
    const order = await Order.getOrdersByCustomerId({customerId});
    res.send({order}); 
  } catch ({name, message}) {
    next ({name: "Error" , message: "Error retrieving your order"})
  }
})

orderRouter.post("/", auth, async, (req, res, next) => {
  const { customerId, totalAmount } = req.body;
  try {
    const newOrder = await Order.createOrders({customerId, totalAmount}); 
    res.send({newOrder}); 
  } catch ({name, message}) {
    next({name: "Error", message: "Error creating order"})
  }
});

orderRouter.patch("/:orderId", auth, async (req, res, next) => {
const { orderId} = req.params; 
const { totalAmount, isActive} = req.body; 

try {
  const editedOrder = await editOrders({
    id: orderId, 
    totalAmount, 
    isActive, 
  })
  res.send(editedOrder); 
} catch ({name, message}) {
  next({name: "Error", message: "Error editing order"})
  
}

} )


orderRouter.delete("/:orderId", auth, async (req, res, next) => {
  const id = req.params.orderId; 
  try {
    await getOrdersByCustomerId(id); 
    const deletedProduct = await deleteOrders({id});
    res.send(deletedProduct)
  } catch ({name, message}) {
    next({name: "Error", message: "Error deleting order"})
  }
})


module.exports = orderRouter;
