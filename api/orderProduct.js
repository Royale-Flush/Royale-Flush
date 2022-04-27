const opRouter = require("express").Router();
const { ProductOrder } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { auth } = require("./utils");

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
// opRouter.get("/:productId/orderProduct", async (req, res, next) => {
//   const { productId } = req.params;
//   try {
//     const ProdOrder = await ProductOrder.getOrderProductById({ productId });
//     res.send({ ProdOrder });
//   } catch ({ name, message }) {
//     next({ name: "Error", message: "No orders to get" });
//   }
// });
// opRouter.get('/:productId/orderProduct', async (req, res, next) => {
//   const { productId } = req.params
//   try {
//     const quantityID = await ProductOrder.getQuantityById({ productId })
//     res.send({ quantityID })
//   } catch ({ name, message }) {
//     next({ name: 'Error', message: 'could not match id to quantity' })
//   }
// })

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

module.exports = opRouter;
