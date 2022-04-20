const client = require("./client");
const { User } = require("./index");
// declare your model imports here
// for example, User

async function dropTables() {
  try {
    await client.query(`
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS orderProduct;
      DROP TABLE IF EXISTS customer;
      DROP TABLE IF EXISTS product;
      DROP TABLE IF EXISTS categories;
      
      `);
  } catch (error) {
    console.log("Error dropping Tables", error);
  }
}

async function createTables() {
  try {
    console.log("...creating customers");
    await client.query(`
        CREATE TABLE customer(
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            name VARCHAR(30), 
            address VARCHAR(50), 
            email VARCHAR(50), 
            phone VARCHAR(20), 
            payment VARCHAR(20)
            );
        `);
    console.log("...passed customer table ");
    await client.query(`

        CREATE TABLE categories (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            tags VARCHAR(255)
            );
        `);
    console.log("...passed categories table ");
    await client.query(`
        CREATE TABLE product (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            price integer not null, 
            "categoryId" integer REFERENCES categories(id) 
            );
        `);
    console.log("...passed products table ");
    await client.query(`
        CREATE TABLE orderProduct (
            orderProductID SERIAL PRIMARY KEY,
            orderId integer NOT NULL,
            "productId" integer REFERENCES product(id) not null,
            quantity integer NOT NULL
          
            );
        `);
    console.log("...passed orderProducts table ");

    await client.query(`
        CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            "customerId" integer references customer(id) not null,
            "totalAmount" integer not null,
            isActive boolean default false
            );
            `);
  } catch (error) {
    console.error(error);
  }
}

async function populateInitialData() {
  try {
    const newPeople = [
      { username: "Cory", password: "CoryCory1" },
      { username: "Alex", password: "AlexAlex1" },
      {
        username: "Chudiisnumber1",
        password: "ChudiChudi1",
        name: "Chudi",
        address: "1281 Hope Ct",
        email: "chudiisnumber1@Yahoo.com",
        phone: "281-330-8004",
      },
      { username: "Itcel", password: " ItcelItcel1" },
    ];

    const users = await Promise.all(newPeople.map(User.createUser));

    // create useful starting data by leveraging your
    // Model.method() adapters to seed your db, for example:
    // const user1 = await User.createUser({ ...user info goes here... })
    return users;
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
    await populateInitialData();
  } catch (error) {
    console.log("Error rebuilding Tables");
    throw error;
  } finally {
    client.end();
  }
}

rebuild();

module.exports = { rebuild };
