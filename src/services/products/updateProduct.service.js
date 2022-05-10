import database from "../../database";

const updateProductService = async ({ id, name, price }) => {
  try {
    const res = await database.query("SELECT * FROM products p WHERE id = $1", [
      id,
    ]);

    if (!res.rowCount.length) {
      throw new Error("Not found any category with this id");
    }

    name ? (category.name = name) : category.name;
    price ? (category.price = price) : category.price;

    const updatedProduct = await database.query(
      "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *",
      [category.name, category.price, id]
    );

    return updatedProduct.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default updateProductService;
