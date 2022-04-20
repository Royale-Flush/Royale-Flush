const client = require("../client");

async function createProductOrders({ quantity }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
          INSERT INTO orderProduct (Quantity)
          VALUES ($1)
          RETURNING *;
          `,
      [quantity]
    );

    return orders;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createProductOrders,
};

//Need to make sure order ID's created are unique, table is set to give up on conflict
