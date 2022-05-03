const client = require('./client')
const {
  Customer,
  Categories,
  Order,
  Product,
  ProductOrder,
} = require('./models')
const {
  newPeople,
  newCategories,
  newOrder,
  newProduct,
  newProductOrder,
} = require('./SeedData')

async function dropTables() {
  try {
    await client.query(`
 
      DROP TABLE IF EXISTS orderproduct;
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS customer;
      DROP TABLE IF EXISTS product;
      DROP TABLE IF EXISTS categories;
      
      `)
  } catch (error) {
    console.log('Error dropping Tables', error)
  }
}

async function createTables() {
  try {
    console.log('...creating customers')
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
        `)
    console.log('...passed customer table ')
    await client.query(`

        CREATE TABLE categories (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            tags VARCHAR(255)
            );
        `)
    console.log('...passed categories table ')
    await client.query(`
        CREATE TABLE product (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            price numeric not null, 
            "categoryId" integer REFERENCES categories(id),
            "imageUrl" VARCHAR(255)
            );
        `)
    console.log('...passed products table ')
    await client.query(`
        CREATE TABLE orders (
            id SERIAL PRIMARY KEY,
            "customerId" integer references customer(id),
            "totalAmount" numeric not null,
            isActive boolean default true not null
            );
            `)
    await client.query(`
        CREATE TABLE orderProduct (
            ID SERIAL PRIMARY KEY,
            "productId" integer REFERENCES product(id),
            "orderId" integer REFERENCES orders(id),
            quantity integer
            );
        `)
    console.log('...passed orderProducts table ')
    //orders needs to have a not null customer(id)
    //should customerId be the same as orders serial Id???
  } catch (error) {
    console.error(error)
  }
}

async function populateInitialData() {
  try {
    const users = await Promise.all(newPeople.map(Customer.createUser))
    const categories = await Promise.all(
      newCategories.map(Categories.createCategories)
    )
    const order = await Promise.all(newOrder.map(Order.createOrders))
    const product = await Promise.all(newProduct.map(Product.createProduct))
    const productOrder = await Promise.all(
      newProductOrder.map(ProductOrder.createProductOrders)
    )
  } catch (error) {
    console.error(error)
  }
}

async function rebuild() {
  try {
    client.connect()
    await dropTables()
    await createTables()
    await populateInitialData()
  } catch (error) {
    console.log('Error rebuilding Tables')
    throw error
  } finally {
    client.end()
  }
}

rebuild()

module.exports = { rebuild }
