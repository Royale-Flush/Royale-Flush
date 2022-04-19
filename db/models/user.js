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
    console.log("getAllUsers error: ", error);
  }
}

async function createUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO customer(username, password)
      VALUES ($1, $2)
      ON CONFLICT (username) DO NOTHING
      RETURNING *;
      `,
      [username, password]
    );
    if (user === undefined) return null;

    return user;
  } catch (error) {
    console.log("Create Users error: ", error);
  }
}
module.exports = {
  getAllUsers,
  createUser,
};
