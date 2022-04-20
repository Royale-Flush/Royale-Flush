const client = require("../client");

async function createProduct({ categoryId, name, price }) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
        INSERT INTO product("categoryId", name, price)
        VALUES ($1, $2, $3)
        ON CONFLICT (name) DO NOTHING
        RETURNING *;
        `,
      [categoryId, name, price]
    );

    return product;
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct({ id }) {
  console.log("!!!  deleteProduct");

  try {
    await client.query(
      `DELETE FROM orderproduct
   WHERE "productId" = $1
   ;
   `,
      [id]
    );

    const {
      rows: [product],
    } = await client.query(
      `
            DELETE FROM product *
            WHERE id = ${id}
            RETURNING *;
            `
    );
    console.log("!!! end deleteProduct");

    return product;
  } catch (error) {
    console.log(error);
  }
}

async function getAllProducts() {
  console.log("!!! getAllProducts");

  try {
    const {
      rows: [product],
    } = await client.query(
      `
      SELECT * FROM product
    `
    );
    console.log("!!! end getAllProducts");

    return product;
  } catch (error) {
    console.log(error);
  }
}

async function getProductsByCategory({ categoryId }) {
  console.log("!!! getProductsByCategory");
  try {
    const {
      rows: [product],
    } = await client.query(
      `
                SELECT category.*, category.id as "categoryId"
                FROM product 
                JOIN categories ON product."categoryId" = categories.id
                WHERE category.id = $1;

                
                `,
      [categoryId]
    );
    console.log("!!! end getProductsByCategory");

    return product;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductsByCategory,
};
