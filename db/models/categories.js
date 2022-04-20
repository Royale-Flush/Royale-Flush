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

module.exports = {
  createCategories,
};
