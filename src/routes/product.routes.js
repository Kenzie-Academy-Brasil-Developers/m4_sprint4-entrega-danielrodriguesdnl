import { Router } from "express";
import ProductController from "../controllers/products.controller";
import ProductsCategoryController from "../controllers/productsCategory.controller";

const productRouter = Router();

const productsController = new ProductController();
const productsCategoryController = new ProductsCategoryController();

productRouter.post("/", productsController.store);
productRouter.get("/", productsController.index);
productRouter.get("/:id", productsController.show);
productRouter.patch("/:id", productsController.update);
productRouter.delete("/:id", productsController.delete);

productRouter.get("/category/:category_id", productsCategoryController.index);

export default productRouter;
