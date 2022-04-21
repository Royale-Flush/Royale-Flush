const client = require("../client");

async function createProductOrders({ productId, quantity }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
          INSERT INTO orderProduct ("productId", quantity)
          VALUES ($1, $2)
          RETURNING *;
          `,
      [productId, quantity]
    );

    return orders;
  } catch (error) {
    console.log(error);
  }
}

async function getProductById({ productId }) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
    SELECT * FROM product
    WHERE id = $1
    `,
      [productId]
    );
    console.log("Gonna get all the products by their product ID's: ", product);
    return product;
  } catch (error) {
    throw error;
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
    );
    console.log("Gonna get all the quantity by their product ID's: ", quantity);
    return quantity;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createProductOrders,
  getProductById,
  getQuantityById,
};
//Need to make sure order ID's created are unique, table is set to give up on conflict
