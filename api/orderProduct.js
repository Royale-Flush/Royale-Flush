const opRouter = require("express").Router();
const { ProductOrder } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../.env");
const { auth } = require("./utils");

opRouter.get("/:categoryId/orderProduct", async (req, res, next) => {
  const { productId } = req.params;
  try {
    const ProdOrder = await ProductOrder.getOrderProductById({ productId });
    res.send({ ProdOrder });
  } catch ({ name, message }) {
    next({ name: "Error", message: "No orders to get" });
  }
});

opRouter.post("/new", async (req, res, next) => {
  const {} = req.body;
  try {
    const newOProd = await ProductOrder.createProductOrders({});
    res.send({ newOProd });
  } catch ({ name, message }) {
    next({
      name: "Error",
      message: "cannot creat new product orders",
    });
  }
});
opRouter.patch("/:productId", auth, async (req, res, next) => {
  const { productId } = req.params;
  const { name, price } = req.body;
  try {
    const product = await EditProduct({
      id: productId,
      name,
      price,
    });
    // console.log(Product, "FROM PATCH REQUEST")
    res.send(product);
  } catch (error) {
    next(error);
  }
});
opRouter.delete("/:productId", auth, async (req, res, next) => {
  const id = req.params.productId;
  try {
    await getProductById(id);
    const deleteProduct = await Product.deleteProduct({ id });

    res.send(deleteProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = opRouter;
