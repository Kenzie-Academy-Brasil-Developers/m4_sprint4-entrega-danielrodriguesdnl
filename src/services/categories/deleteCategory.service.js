import database from "../../database";

const deleteCategoryService = async ({ id }) => {
  try {
    const res = await database.query(
      "SELECT * FROM  categories WHERE id = $1",
      [id]
    );

    if (!res.rows.length) {
      throw new Error("Not found any category with this id");
    }

    await database.query("DELETE FROM categories WHERE id = $1", [id]);
  } catch (err) {
    throw new Error(err);
  }
};

export default deleteCategoryService;
