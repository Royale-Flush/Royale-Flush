const { ProductOrder } = require("../db/index");
const opRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const { auth } = require("./utils");
const { JWT_SECRET } = process.env;

opRouter.post("/", async (req, res, next) => {
  const { productId, quantity, orderId } = req.body;
  try {
    const newOProd = await ProductOrder.createProductOrders({
      productId,
      quantity,
      orderId,
    });
    res.send(newOProd);
  } catch ({ name, message }) {
    next({
      name: "Error",
      message: "cannot creat new product orders",
    });
  }
});

opRouter.patch(
  "/:orderId/:productId/:quantity",
  auth,
  async (req, res, next) => {
    const { productId, orderId, quantity } = req.params;
    try {
      const edit = await ProductOrder.editQuantity({
        productId,
        orderId,
        quantity,
      });
      res.send(edit);
    } catch (error) {
      next(error);
    }
  }
);

// DELETE FROM CART { orderId, productId}
opRouter.delete("/:orderId/:productId", auth, async (req, res, next) => {
  const { orderId, productId } = req.params;
  try {
    const id = ProductOrder.getOrderProductById(orderId);
    console.log(id);
    const remove = ProductOrder.removeFromCart(id);
    console.log(remove);
    res.send();
  } catch (error) {
    next(error);
  }
});

module.exports = opRouter;
