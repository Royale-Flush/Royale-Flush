const { client } = require("./");
// declare your model imports here
// for example, User

async function dropTables() {
  try {
    await client.query(`
      DELETE TABLE IF EXISTS users;
      DELETE TABLE IF EXISTS toilets;
      DELETE TABLE IF EXISTS bidets;
      DELETE TABLE IF EXISTS portable;
      `);
  } catch (error) {
    console.log("Error dropping Tables", error);
  }
}

async function createTables() {
  try {
    await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
            active BOOLEAN DEFAULT false
            );
        `);
  } catch (error) {
    console.log("Error building Tables", error);
  }
  await client.query(`
        CREATE TABLE toilets (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            color VARCHAR(255) NOT NULL,
            flusher VARCHAR(255) NOT NULL,
            gallons integer not null,
            dimensions integer not null
            );
        `);
  await client.query(`
        CREATE TABLE bidets (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            pressure integer not null
            );
        `);
  await client.query(`
        CREATE TABLE portable (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            type VARCHAR(255) NOT NULL,
            color VARCHAR(255) NOT NULL,
            gallons integer not null,
            dimensions integer not null
            );
        `);
}

async function populateInitialData() {
  try {
    // create useful starting data by leveraging your
    // Model.method() adapters to seed your db, for example:
    // const user1 = await User.createUser({ ...user info goes here... })
  } catch (error) {
    throw error;
  }
}

// buildTables(){
//   .then(populateInitialData)
//   .catch(console.error)
//   .finally(() => client.end());
// }

async function rebuild() {
  try {
    client.connect();
    await dropTables();
    await createTables();
  } catch (error) {
    console.log("Error rebuilding Tables");
    throw error;
  }
}

module.exports = { rebuild };
