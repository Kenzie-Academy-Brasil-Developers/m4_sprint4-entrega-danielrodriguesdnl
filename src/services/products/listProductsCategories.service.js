import database from "../../database";

const listProductsCategoriesService = async () => {
  try {
    const res = await database.query(
      "SELECT * FROM products p INNER JOIN categories c ON p.category_id = c.id;"
    );

    return res.rows;
  } catch (err) {
    throw new Error(err);
  }
};

export default listProductsCategoriesService;
