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

async function getUserById({ id }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    SELECT * FROM customer
    WHERE id = $1
    `,
      [id]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByPassword(password) {
  try {
    const { rows: user } = await client.query(
      `
    SELECT password FROM customer
    WHERE password = $1
    `,
      [password]
    );
    return user;
  } catch (error) {
    throw error;
  }
}
async function getUserByEmail(email) {
  try {
    const { rows: user } = await client.query(
      `
    SELECT email FROM customer
    WHERE email = $1
    `,
      [email]
    );
    return user;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  getUserByPassword,
  getUserByEmail,
};
