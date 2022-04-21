const { Order } = require(".");
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

async function getOrderByCustomerId({ customerId }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
      SELECT *
      FROM orders
      WHERE "customerId"=$1;
      `[customerId]
    );
    // console.log("!!!!!orders ", orders);
    return orders;
  } catch (error) {
    console.log(error);
  }
}

async function editOrder({ id, totalAmount, isActive }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
      UPDATE orders
      SET "totalAmount" = ($1), isActive = ($2)
      WHERE id=($3)
      RETURNING *
      `,
      [totalAmount, isActive, id]
    );
    // console.log("!!@@!!", orders);
    return orders;
  } catch (error) {
    console.log(error);
  }
}

async function deleteOrder({ id }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
      DELETE FROM orders
      WHERE id = $1
      ;
      `,
      [id]
    );
    // console.log("!!@@!! DELETING", orders);
    return orders;
  } catch (error) {
    console.log(error);
  }
}

async function getAllActiveOrders({ isActive }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
      SELECT * FROM orders 
      WHERE isactive = $1

      `[isActive]
    );
    // console.log("!!@@!! Getting Active Orders", orders);
    return orders;
  } catch (error) {
    console.log(error);
  }
}

async function getTotalAmount([customerId]) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
    SELECT "totalAmount"
    FROM orders
    WHERE "customerId" = ${customerId}
    
    `[customerId]
    );
    console.log("!!@@!! total", orders);
    return orders;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createOrders,
  getOrderByCustomerId,
  editOrder,
  deleteOrder,
  getAllActiveOrders,
  getTotalAmount,
};
