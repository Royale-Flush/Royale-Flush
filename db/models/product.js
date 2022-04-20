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
    //console.log("bunch of random ass text: ", product);
    return product;
  } catch (error) {
    console.log(error);
  }
}

async function deleteProduct({ id }) {
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
    // console.log("deleting shit: ", product);
    return product;
  } catch (error) {
    console.log(error);
  }
}

async function getAllProducts() {
  try {
    const { rows } = await client.query(
      `
      SELECT * FROM product
    `
    );
    // console.log("getting shit: ", rows);
    return rows;
  } catch (error) {
    console.log(error);
  }
}

async function getProductsByCategory({ categoryId }) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
                SELECT *, categories.id as "categoryId" FROM product 
                JOIN categories ON product."categoryId" = categories.id
                WHERE categories.id = $1;
                `,
      [categoryId]
    );
    console.log("getting stuff based on categories: ", product);
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
