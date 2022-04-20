const client = require("../client");

async function createOrders({ customerId, totalAmount }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
          INSERT INTO orders("customerId", "totalAmount")
          VALUES ($1,$2)
          RETURNING *;
          `,
      [customerId, totalAmount]
    );

    return orders;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createOrders,
};
