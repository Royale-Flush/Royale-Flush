// grab our db client connection to use with our adapters
const client = require("../client");

async function getAllUsers() {
  const {
    rows: [user],
  } = await client.query(`
  SELECT * FROM user,
  RETURNING *
  
  `);
  return user;

  /* this adapter should fetch a list of users from your db */
}
async function createUser({ username, password }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
  INSERT INTO customer(username, password)
  VALUES ($1,$2)
  ON CONFLICT (username) DO NOTHING
  RETURNING *;
  
  `,
      [username, password]
    );
    if (user === undefined) return null;

    return user;
  } catch (error) {}
  console.log(error);
}
module.exports = {
  getAllUsers,
  createUser,
};
