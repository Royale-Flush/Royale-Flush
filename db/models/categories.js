const client = require("../client");

async function createCategories({ name, tags }) {
  try {
    const {
      rows: [categories],
    } = await client.query(
      `
        INSERT INTO categories(name, tags)
        VALUES ($1, $2)
        ON CONFLICT (name) DO NOTHING
        RETURNING *;
        `,
      [name, tags]
    );

    return categories;
  } catch (error) {
    console.log(error);
  }
}
async function destroyCategory({ categoryId }) {
  try {
    await client.query(
      `
    DELETE from orderproduct
    WHERE id =$1

    `,
      [categoryId]
    );
    await client.query(
      `
    DELETE from product
    WHERE "categoryId"=$1
    `,
      [categoryId]
    );
    const {
      rows: [categories],
    } = await client.query(
      `
  DELETE FROM categories*
  WHERE categories.id =$1
  RETURNING *
  
  `,
      [categoryId]
    );
    console.log("what", categories);
    return categories;
  } catch (error) {
    throw error;
  }
}
async function editCategory({ id, name, tags }) {
  try {
    const {
      rows: [categories],
    } = await client.query(
      `
    UPDATE categories
    SET name = ($1), tags = ($2)
    WHERE id = $3
    RETURNING*;
    `,
      [name, tags, id]
    );

    console.log("we can EDIT!!!:", categories);
    return categories;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCategories,
  destroyCategory,
  editCategory,
};
