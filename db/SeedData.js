const client = require("pg/lib/native/client");

async function dropTables() {
  try {
  } catch (error) {}
}

async function createTables() {
  try {
    await client.query(`
        CREATE TABLE users
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        `);
  } catch (error) {
    console.log("Error building Tables", error);
  }
}

// toilets, bidets, porta-pottys, users,
