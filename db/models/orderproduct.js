const { ProductOrder } = require('.')
const client = require('../client')

async function createProductOrders({ productId, quantity, orderId }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
          INSERT INTO orderProduct ("productId", "orderId", quantity)
          VALUES ($1, $2, $3)
          RETURNING *;
          `,
      [productId, orderId, quantity]
    )

    return orders
  } catch (error) {
    console.log(error)
  }
}

async function getOrderProductById({ productId }) {
  try {
    const {
      rows: [productId],
    } = await client.query(
      `
    SELECT * FROM orderproduct
    WHERE id = $1
    `,
      [productId]
    )
    console.log(
      "Gonna get all the ordered product by their product ID's: ",
      ProductOrder
    )
    return productId
  } catch (error) {
    throw error
  }
}

async function getQuantityById({ productId }) {
  try {
    const { rows: quantity } = await client.query(
      `
    SELECT quantity FROM orderproduct
    WHERE id = $1
    `,
      [productId]
    )
    console.log("Gonna get all the quantity by their product ID's: ", quantity)
    return quantity
  } catch (error) {
    throw error
  }
}

async function editQuantity({ productId, orderId, quantity }) {
  try {
    const {
      rows: [orderProduct],
    } = await client.query(
      `
    UPDATE orderproduct
    SET quantity =$3
    WHERE "orderId" = $2 and "productId" = $1
    RETURNING*; 
    `,
      [productId, orderId, +quantity]
    )
    return orderProduct
  } catch (error) {
    throw error
  }
}

module.exports = {
  createProductOrders,
  getOrderProductById,
  getQuantityById,
  editQuantity,
}
//Need to make sure order ID's created are unique, table is set to give up on conflict
