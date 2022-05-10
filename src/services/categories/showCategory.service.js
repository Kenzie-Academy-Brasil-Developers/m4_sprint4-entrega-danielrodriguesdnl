import database from "../../database";

const showCategoryService = async () => {
  try {
    const res = await database.query(
      "SELECT * FROM categories c WHERE c.id = $1",
      [id]
    );

    if (!res.rows.length) {
      throw new Error("Not found any category with this id");
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default showCategoryService;
