import database from "../../database";

const showProductService = async () => {
  try {
    const res = await database.query(
      "SELECT * FROM products p WHERE p.id = $1",
      [id]
    );

    if (!res.rows.length) {
      throw new Error("Not found any product with this id");
    }

    return res.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

export default showProductService;
