const res = require("express/lib/response");
const { append } = require("express/lib/response");
const { authRouter } = require("/auth");

const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.use("/auth", require("./auth"));

// apiRouter.get("/health", (req, res, next) => {
//   res.send({
//     healthy: true,
//   });
// });

apiRouter.use((error, req, res, next) => {
  res.send({ name: error.name, message: error.message });
});

module.exports = apiRouter;
