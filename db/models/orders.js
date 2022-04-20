const client = require("../client");

async function createOrders({ totalAmount }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
          INSERT INTO orders("totalAmount")
          VALUES ($1)
          RETURNING *;
          `,
      [totalAmount]
    );

    return orders;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createOrders,
};
