const { client } = require("./");
// declare your model imports here
// for example, User

async function dropTables() {
  try {
    await client.query(`
      DELETE TABLE IF EXISTS order;
      DELETE TABLE IF EXISTS orderProduct;
      DELETE TABLE IF EXISTS customer;
      DELETE TABLE IF EXISTS product;
      DELETE TABLE IF EXISTS categories;
      `);
  } catch (error) {
    console.log("Error dropping Tables", error);
  }
}

async function createTables() {
  try {
    await client.query(`
        CREATE TABLE customer (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            name VARCHAR(30) NOT NULL, 
            address VARCHAR(50), 
            email VARCHAR(50), 
            phone VARCHAR(20), 
            payment VARCHAR (20)

            );
        `);
  } catch (error) {
    console.log("Error building Tables", error);
  }
  await client.query(`
        CREATE TABLE categories (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            tags VARCHAR(255) 
            );
        `);
  await client.query(`
        CREATE TABLE product (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            price integer not null, 
            "categoryId" integer REFERENCES categories(id) not null 
            );
        `);
  await client.query(`
        CREATE TABLE orderProduct (
            orderProductID SERIAL PRIMARY KEY,
            orderId integer NOT NULL,
            "productId" integer REFERENCES product(id) not null,
            quantity integer NOT NULL,
          
            );
        `);

  await client.query(`
        CREATE TABLE order (
            id SERIAL PRIMARY KEY,
            "customerId" integer references customer(id),
            "totalAmount" integer not null,
            isActive boolean default false 
          
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
