const userRouter = require("express").Router();
const { Customer } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const { auth } = require("./utils");

userRouter.get("/", async (req, res, next) => {
  try {
    const everyone = await Customer.getAllUsers();
    res.send(everyone);
  } catch ({ name, message }) {
    next({ name: "Definitely an Error", message: "Definitely made a mistake" });
  }
});

// userRouter.get("/:password/customer", async (req, res, next) => {
//   const { password } = req.params;
//   try {
//     const user = await Customer.getUserByPassword({ password });
//     res.send({ user });
//   } catch ({ name, message }) {
//     next({ name: "Try Again!", message: "Password does not exist." });
//   }
// });

// TODO get customer by ID route

// TODO get a customer's cart
// * Customer.getCartByCustomerID

userRouter.get("/:customerId/cart", async (req, res, next) => {
  try {
    // get the cart from the db
  } catch (error) {
    next(error);
  }
});

userRouter.get("/:username", async (req, res, next) => {
  const { username } = req.params;
  try {
    const theUser = await Customer.getUserByUsername(username);
    res.send(theUser);
  } catch ({ name, message }) {
    next({ name: "Try Again!", message: "Username does not exist." });
  }
});

// userRouter.get('/:email/customer', async (req, res, next) => {
//   const { email } = req.params
//   try {
//     const emailUser = await Customer.getUserByEmail({ email })
//     res.send({ emailUser })
//   } catch ({ name, message }) {
//     next({ name: 'Try Again!', message: 'Email does not exist.' })
//   }
// })

// userRouter.post('/', async (req, res, next) => {
//   const { username, password, name, address, email, phone, payment } = req.body
//   try {
//     const newUser = await Customer.createUser({
//       username,
//       password,
//       name,
//       address,
//       email,
//       phone,
//       payment,
//     })
//     res.send({ newUser })
//   } catch ({ name, message }) {
//     next({
//       name: 'Error',
//       message: "Didn't create a new user",
//     })
//   }
// })

// * ------- STRETCH GOAL -------------
userRouter.patch("/:customerId", auth, async (req, res, next) => {
  const { customerId } = req.params;
  const { password, name, address, email, phone, payment } = req.body;
  try {
    const updated = await Customer.updateUser({
      password,
      name,
      address,
      email,
      phone,
      payment,
      id: customerId,
    });

    res.send(updated);
  } catch (error) {
    next(error);
  }
});

// * ----------- STRETCH GOAL --------------
userRouter.delete("/:customerId", auth, async (req, res, next) => {
  const id = req.params.customerId;
  try {
    await getUserById(id);
    const deleteUser = await Customer.destroyUser({ id });

    res.send(deleteUser);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
