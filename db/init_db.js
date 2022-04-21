const client = require("./client");
const {
  Customer,
  Categories,
  Order,
  Product,
  ProductOrder,
} = require("./models");
const {
  newPeople,
  newCategories,
  newOrder,
  newProduct,
  newProductOrder,
} = require("./SeedData");

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
            price numeric not null, 
            "categoryId" integer REFERENCES categories(id)
            );
        `);
    console.log("...passed products table ");
    await client.query(`
        CREATE TABLE orderProduct (
            ID SERIAL PRIMARY KEY,
            "productId" integer REFERENCES product(id) ,
            quantity integer NOT NULL
            );
        `);
    console.log("...passed orderProducts table ");
    //orders needs to have a not null customer(id)
    await client.query(`
        CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            "customerId" integer references customer(id),
            "totalAmount" numeric not null,
            isActive boolean default false
            );
            `);
  } catch (error) {
    console.error(error);
  }
}

async function populateInitialData() {
  try {
    const users = await Promise.all(newPeople.map(Customer.createUser));
    const categories = await Promise.all(
      newCategories.map(Categories.createCategories)
    );
    const order = await Promise.all(newOrder.map(Order.createOrders));
    const product = await Promise.all(newProduct.map(Product.createProduct));
    const productOrder = await Promise.all(
      newProductOrder.map(ProductOrder.createProductOrders)
    );

    return users, categories, order, product, productOrder;
  } catch (error) {
    throw error;
  }
}

// async function testingSTuff() {
//   const everyone = await Customer.getAllUsers();
//   const somebody = await Customer.getUserById({ id: "1" });
//   const forgotUser = await Customer.getUserByPassword({
//     password: "ChudiChudi1",
//   });
//   const emails = await Customer.getUserByEmail({
//     email: "chudiisnumber1@Yahoo.com",
//   });
//   const erase = await Customer.destroyUser({ id: "3" });
//   const change = await Customer.updateUser({
//     password: "ChudiChudi1",
//     name: "Chudi1",
//     address: "1281 Hope Ct",
//     email: "chudiisnumber1@Yahoo.com",
//     phone: "281-330-8004",
//     payment: null,
//     id: "2",
//   });
//   return everyone, somebody, forgotUser, emails, erase, change;
// }

async function testingOrderProds() {
  const items = await ProductOrder.getProductById({ productId: "2" });
  const amountOfItems = await ProductOrder.getQuantityById({ productId: "3" });
  const quan = await ProductOrder.editQuantity({ id: "2", quantity: "2" });
  const destroooyy = await Categories.destroyCategory({ categoryId: "1" });
  const edit = await Categories.editCategory({
    id: "2",
    name: "theToilet",
    tags: "CleanCleanClean",
  });

  return items, amountOfItems, quan, destroooyy, edit;
}

async function rebuild() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await populateInitialData();
    // await testingSTuff();
    await testingOrderProds();
    // console.log("anything");
  } catch (error) {
    console.log("Error rebuilding Tables");
    throw error;
  } finally {
    client.end();
  }
}

rebuild();

module.exports = { rebuild };
