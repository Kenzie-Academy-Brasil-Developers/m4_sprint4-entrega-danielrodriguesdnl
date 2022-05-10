import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import categoryRouter from "./routes/category.routes";
import productRouter from "./routes/product.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoryRouter);
app.use("/products", productRouter);

export default app.listen(3333, () => {
  console.log("Server running");
  startDatabase();
});
