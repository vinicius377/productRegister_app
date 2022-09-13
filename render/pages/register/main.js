const productService = window.product;

class Product {
  insertProduct = (data) => productService.create(data);

  deleteProduct = (id) => productService.delete(id);

  getAllProduct = () => productService.getAll();

  getProduct = (id) => productService.get(id);

  updateProduct = (id, data) => productService.update(id, data);
}

const handleProduct = new Product();

const html = {
  get: (selector) => document.querySelector(selector),
  getAll: (selector) => document.querySelectorAll(selector),
};

const inputs = {
  sku: html.get("#sku"),
  name: html.get("#name"),
  price: html.get("#price"),
};
const btn = html.get("#btn");

btn.addEventListener("click", async () => {
  await handleProduct.insertProduct({
    sku: inputs.sku.value,
    name: inputs.name.value,
    price: Number(inputs.price.value),
  });
});

const products = html.get("#products");

window.onload = async () => {
  const data = await handleProduct.getAllProduct();
  console.log(data);
};
