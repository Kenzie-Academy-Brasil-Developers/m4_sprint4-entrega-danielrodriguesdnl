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

  async index(request, response) {}
}
