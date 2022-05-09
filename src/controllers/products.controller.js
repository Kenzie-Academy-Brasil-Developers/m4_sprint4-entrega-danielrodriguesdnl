export default class ProductController {
  async store(request, response) {
    const { name, price, category_id } = request.body;

    try {
      const category = await createCategoryService({
        name,
        price,
        category_id,
      });

      return response.status(201).json(category);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async index(request, response) {}
}
