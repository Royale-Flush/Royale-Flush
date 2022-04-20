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

module.exports = {
  createProduct,
};
