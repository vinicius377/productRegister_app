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
  const created = await window.product.create({
    sku: inputs.sku.value,
    name: inputs.name.value,
    price: Number(inputs.price.value),
  });
});
