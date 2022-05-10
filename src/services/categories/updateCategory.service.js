import database from "../../database";

const updateCategoryService = async ({ id, name }) => {
  try {
    const res = await database.query(
      "SELECT * FROM categories c WHERE id = $1",
      [id]
    );

    if (!res.rowCount.length) {
      throw new Error("Not found any category with this id");
    }

    name ? (category.name = name) : category.name;

    const updatedCategory = await database.query(
      "UPDATE categories SET name = $1 WHERE id = $2 RETURNING *",
      [category.name, id]
    );

    return updatedCategory.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;
