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
    console.log(categories);
    return categories;
  } catch (error) {
    console.log(error);
  }
}
async function destroyCategory({ categoryId, productId }) {
  try {
    await client.query(
      `
    DELETE from orderproduct*
    WHERE "productId" =$1

    `,
      [productId]
    );
    await client.query(
      `
    DELETE from product*
    WHERE "categoryId"=$1
    `,
      [categoryId]
    );
    const { rows } = await client.query(
      `
  DELETE FROM categories*
  WHERE categories.id =$1
  RETURNING *
  
  `,
      [categoryId]
    );
    // console.log("what", rows);
    return rows;
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

    // console.log("we can EDIT!!!:", categories);
    return categories;
  } catch (error) {
    throw error;
  }
}

async function getAllCategories() {
  try {
    const { rows } = await client.query(
      `
    select * from categories
    `
    );
    // console.log("getting all categories: ", categories)
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getCategoryById(id) {
  try {
    const {
      rows: [category],
    } = await client.query(
      `
      select name from categories
      where id = $1
      `,
      [id]
    );
    // console.log("getting categories by name: ", category)
    return category;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCategories,
  destroyCategory,
  editCategory,
  getAllCategories,
  getCategoryById,
};
