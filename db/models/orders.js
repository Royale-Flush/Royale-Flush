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

async function getOrdersByCustomerId({ customerId }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
      SELECT * FROM orders 
      WHERE "customerId" = $1;`,
      [customerId]
    );
    // console.log("Line 33 ", orders);
    return orders;
  } catch (error) {
    console.log(error);
  }
}

async function editOrders({ id, totalAmount, isActive }) {
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
    // console.log("Line 53", orders);
    return orders;
  } catch (error) {
    console.log(error);
  }
}

async function deleteOrders({ id }) {
  try {
    const {
      rows: [orders],
    } = await client.query(
      `
      DELETE FROM orders *
      WHERE id = $1
      returning *
      ;
      `,
      [id]
    );
    // console.log("Line 72", orders);
    return orders;
  } catch (error) {
    console.log(error);
  }
}

async function getAllActiveOrders({ isActive }) {
  try {
    const { rows } = await client.query(
      `
      SELECT * FROM orders 
      WHERE isActive = $1
      `,
      [isActive]
    );
    // console.log("line 90", rows);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

async function getCartByCustomerId(customerId) {
  const {
    rows: [cart],
  } = await client.query(
    `
    SELECT orders.id, orders."totalAmount", orders."customerId", orders.isactive,
    CASE WHEN orderproduct."orderId" IS NULL THEN '[]'::json
    ELSE
      JSON_AGG(
        JSON_BUILD_OBJECT(
          'id', product.id,
          'name', product.name,
          'price', product.price,
          'category', product."categoryId",
          'quantity', orderproduct.quantity
          )
      ) END as items		
    FROM orders 
    LEFT JOIN orderproduct ON orders.id = orderproduct."orderId"
    LEFT JOIN product ON product.id = orderproduct."productId"
    WHERE orders."customerId" = $1 and orders.isactive = true
    GROUP BY orders.id, orderproduct."orderId"
  `,
    [customerId]
  );
  return cart;
}

module.exports = {
  getCartByCustomerId,
  createOrders,
  getOrdersByCustomerId,
  editOrders,
  deleteOrders,
  getAllActiveOrders,
};
