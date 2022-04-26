const PORT = process.env.PORT || 4000;
const client = require("./db/client");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const server = express();
const { COOKIE_SECRET } = require("./.env");
const cookieParser = require("cookie-parser");

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use("/api", require("./api"));
server.use(cookieParser(COOKIE_SECRET));
server.use(express.static(path.join(__dirname, "build")));
server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  next();
});

const handle = server.listen(PORT, async () => {
  console.log(`Server is running on ${PORT}!`);
  try {
    client.connect();
    console.log("Database is open for business!");
  } catch (error) {
    console.error("Database is closed for repairs!\n", error);
  }
});

module.exports = { server, handle };
