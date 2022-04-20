const client = require("../client");

async function getAllUsers() {
  try {
    const {
      rows: [user],
    } = await client.query(`
    SELECT * FROM customer,
    RETURNING *;
    `);
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function createUser({
  username,
  password,
  name,
  address,
  email,
  phone,
  payment,
}) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO customer(username, password, name, address, email, phone, payment)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT (username) DO NOTHING
      RETURNING *;
      `,
      [username, password, name, address, email, phone, payment]
    );
    if (user === undefined) return null;
    return user;
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getAllUsers,
  createUser,
};
