import { Router } from "express";
import CategoryController from "../controllers/categories.controller";
import ProductController from "../controllers/products.controller";

const userRouter = Router();

const categoriesController = new CategoryController();
const productsController = new ProductController();

userRouter.post("/categories", categoriesController.store);
userRouter.get("/categories", categoriesController.index);

userRouter.post("/products", productsController.store);
userRouter.get("/products", productsController.index);

export default userRouter;
