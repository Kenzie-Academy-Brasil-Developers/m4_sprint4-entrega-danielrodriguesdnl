import listProductsCategoriesService from "../services/products/listProductsCategories.service";

export default class ProductsCategoryController {
  async index(request, response) {
    try {
      const productsCategories = await listProductsCategoriesService();

      return response.json(productsCategories);
    } catch (err) {
      return response.status(500).json(err);
    }
  }
}
