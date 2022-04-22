const res = require("express/lib/response");
const { append } = require("express/lib/response");

const apiRouter = require("express").Router();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    healthy: true,
  });
});

// place your routers here

apiRouter.use((error, req, res, next) => {
  res.send({ name: error.name, message: error.message });
});

module.exports = apiRouter;
