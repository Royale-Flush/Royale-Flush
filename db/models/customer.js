const { Pool } = require("pg/lib");
const client = require("../client");

async function getAllUsers() {
  try {
    const { rows } = await client.query(`
    SELECT * FROM customer
    `);
    // console.log("Gonna get all the users: ", rows);
    return rows;
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
    // console.log("Gonna create all the users: ", user);
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
    // console.log("Gonna get all the users by their ID's: ", user);
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByPassword({ password }) {
  try {
    const { rows: user } = await client.query(
      `
    SELECT * FROM customer
    WHERE password = $1
    `,
      [password]
    );
    // console.log("Gonna get all the users by their passwords: ", user);
    return user;
  } catch (error) {
    throw error;
  }
}
async function getUserByEmail({ email }) {
  try {
    const { rows: user } = await client.query(
      `
    SELECT * FROM customer
    WHERE email = $1
    `,
      [email]
    );
    // console.log("Gonna get all the users by their emails: ", user);
    return user;
  } catch (error) {
    throw error;
  }
}
async function destroyUser({ id }) {
  try {
    await client.query(
      `
    DELETE from orders
    WHERE "customerId"=$1
    `,
      [id]
    );
    const {
      rows: [user],
    } = await client.query(
      `
  DELETE FROM customer
  WHERE id = $1
  RETURNING *
  
  `,
      [id]
    );
    console.log("what", user);
    return user;
  } catch (error) {
    throw error;
  }
}
async function updateUser({
  password,
  name,
  address,
  email,
  phone,
  payment,
  id,
}) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
    UPDATE customer
    SET password = ($1), name =($2), address=($3), email =($4), phone=($5), payment=($6)
    WHERE id=$7
    RETURNING*; 
    `,
      [password, name, address, email, phone, payment, id]
    );
    console.log("did we update?", user);
    return user;
  } catch (error) {
    throw error;
  }
}

const getUserByUsername = async ({ username }) => {
  const {
    rows: [customer],
  } = await client.query(
    `
    SELECT * FROM  customer
    WHERE customer.username = $1
    `,
    [username]
  );
  return customer;
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  getUserByPassword,
  getUserByEmail,
  destroyUser,
  updateUser,
  getUserByUsername,
};
