const catRouter = require('express').Router()
const { Categories, Product, ProductOrder } = require('../db/index')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env
const { auth } = process.env

catRouter.get('/', async (req, res, next) => {
  try {
    const everything = await Categories.getAllCategories()
    console.log(everything)
    res.send(everything)
  } catch ({ name, message }) {
    next({ name: 'Definitely an Error', message: 'Definitely made a mistake' })
  }
})

// catRouter.post("/", async (req, res, next) => {
//   const { name, tags } = req.body;
//   try {
//     const newCat = await Categories.createCategories({ name, tags });
//     console.log("New Category is:", newCat);
//     res.send(newCat);
//   } catch ({ name, message }) {
//     next({
//       name: "Error",
//       message: "Didn't make a new category",
//     });
//   }
// });

module.exports = catRouter
