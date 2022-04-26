const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.use("/auth", require("./auth"));
apiRouter.use("/category", require("./category"));
apiRouter.use("/orderProducts", require("./orderProduct"));
// apiRouter.use("/customer", require("./customer"));
// apiRouter.use("/product", require("./products"));
// apiRouter.use("/order", require("./order"));

apiRouter.use((error, req, res, next) => {
  res.send({ name: error.name, message: error.message });
});

module.exports = apiRouter;
