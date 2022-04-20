const client = require("../client");

async function createProduct({ name, price }) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
        INSERT INTO product(name, price)
        VALUES ($1, $2)
        ON CONFLICT (name) DO NOTHING
        RETURNING *;
        `,
      [name, price]
    );

    return product;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createProduct,
};
