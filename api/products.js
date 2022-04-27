const prodRouter = require("express").Router();
const { Product } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { auth } = require("./utils");

prodRouter.get("/", async (req, res, next) => {
  try {
    const everything = await Product.getAllProducts();
    res.send(everything);
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});
prodRouter.get("/:categoryId/product", async (req, res, next) => {
  const { categoryId } = req.params;
  try {
    const product = await Product.getProductsByCategory({ categoryId });
    res.send(product);
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});

prodRouter.post("/", async (req, res, next) => {
  const { categoryId, name, price } = req.body;
  try {
    const newProd = await Product.createProduct({ categoryId, name, price });
    res.send(newProd);
  } catch ({ name, message }) {
    next({
      name: "Error",
      message: "Did not create new product",
    });
  }
});

// * NOT WORKING -------------
// prodRouter.patch('/:productId', auth, async (req, res, next) => {
//   const { productId } = req.params
//   const { name, price } = req.body
//   try {
//     const product = await EditProduct({
//       id: productId,
//       name,
//       price,
//     })
//     // console.log(Product, "FROM PATCH REQUEST")
//     res.send(product)
//   } catch (error) {
//     next(error)
//   }
// })

prodRouter.delete("/:productId", auth, async (req, res, next) => {
  const id = req.params.productId;
  try {
    // await getProductById(id)
    const deleteProduct = await Product.deleteProduct(id);

    res.send(deleteProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = prodRouter;
