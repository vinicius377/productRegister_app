const productModel = require("../models/product");

class Product {
  async insertProduct(data) {
    const { sku, name, price } = data;
    try {
      await productModel.create({
        sku,
        name,
        price,
      });
      return true;
    } catch {
      return false;
    }
  }

  async deleteProduct(id) {
    try {
      await productModel.destroy({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }

  async getProduct(id) {
    try {
      const result = await productModel.findOne({ where: { id } });
      return result;
    } catch {
      return false;
    }
  }

  async getAllProduct() {
    try {
      const allProduct = await productModel.findAll();
      return allProduct;
    } catch {
      return false;
    }
  }

  async updateProduct(data, id) {
    try {
      await productModel.update({ where: { id }, data });
      return true;
    } catch {
      return false;
    }
  }
}

const productRepo = new Product();

module.exports = productRepo;
