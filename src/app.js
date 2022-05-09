import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import userRouter from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/", userRouter);

export default app.listen(3333, () => {
  console.log("Server running");
  startDatabase();
});
