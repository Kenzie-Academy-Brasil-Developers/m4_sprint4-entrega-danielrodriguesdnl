import createProductService from "../services/products/createProduct.service";
import deleteProductService from "../services/products/deleteProduct.service";
import listProductsService from "../services/products/listProducts.service";
import showProductService from "../services/products/showProduct.service";
import updateProductService from "../services/products/updateProduct.service";

export default class ProductController {
  async store(request, response) {
    const { name, price, category_id } = request.body;

    try {
      const product = await createProductService({
        name,
        price,
        category_id,
      });

      return response.status(201).json(product);
    } catch (err) {
      return response.status(400).json(err.message);
    }
  }

  async index(request, response) {
    try {
      const products = await listProductsService();

      return response.json(products);
    } catch (err) {
      return response.status(500).json(err);
    }
  }

  async show(request, response) {
    const { id } = request.params;
    try {
      const product = await showProductService({ id });

      return response.json(product);
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async update(request, response) {
    const { product_id } = request.params;
    const { name, price } = request.body;
    try {
      const product = await updateProductService({
        id: product_id,
        name,
        price,
        category_id: request.product.category_id,
      });

      return response.json(product);
    } catch (err) {
      return response.status(400).json(err);
    }
  }

  async delete(request, response) {
    const { id } = request.params;
    try {
      const product = await deleteProductService({ id });

      return response.json(product);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
