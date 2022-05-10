import { Router } from "express";
import CategoryController from "../controllers/categories.controller";

const categoryRouter = Router();

const categoriesController = new CategoryController();

categoryRouter.post("/", categoriesController.store);
categoryRouter.get("/", categoriesController.index);
categoryRouter.get("/:id", categoriesController.show);
categoryRouter.patch("/:id", categoriesController.update);
categoryRouter.delete("/:id", categoriesController.delete);

export default categoryRouter;
