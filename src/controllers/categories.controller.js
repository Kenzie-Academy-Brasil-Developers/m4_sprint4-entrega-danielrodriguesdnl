import createCategoryService from "../services/categories/createCategory.service";
import deleteCategoryService from "../services/categories/deleteCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import showCategoryService from "../services/categories/showCategory.service";
import updateCategoryService from "../services/categories/updateCategory.service";

export default class CategoryController {
  async store(request, response) {
    const { name } = request.body;

    try {
      const category = await createCategoryService({ name });

      return response.status(201).json(category);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async index(request, response) {
    try {
      const categories = await listCategoriesService();

      return response.json(categories);
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  async show(request, response) {
    const { id } = request.params;
    try {
      const category = await showCategoryService({ id });

      return response.json(category);
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;
    try {
      const category = await updateCategoryService({ id, name });

      return response.json(category);
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async delete(request, response) {
    const { id } = request.params;
    try {
      const category = await deleteCategoryService({ id });

      return response.json(category);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
