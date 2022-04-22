const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets");

const auth = async (req, res, next) => {
  const token = req.signedCookies.token;
  try {
    const user = await jwt.verify(token, JWT_SECRET);
    req.user = user;
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: "You are super not authorized.",
    });
    return;
  }
  next();
};

module.exports = { auth };
