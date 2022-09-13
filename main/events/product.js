const productRepo = require("../repositories/products");
const { ipcMain, contextBridge, ipcRenderer } = require("electron");

const initRenderProductEvents = () => {
  contextBridge.exposeInMainWorld("product", {
    create: (data) => ipcRenderer.send("product:create", data),
    get: (id) => ipcRenderer.invoke("product:get", id),
    getAll: () => ipcRenderer.invoke("product:getAll"),
    delete: (id) => ipcRenderer.send("product:delete", id),
    update: (id, data) => ipcRenderer.send("product:update", { id, data }),
  });
};

const initProductEvents = () => {
  ipcMain.on("product:create", (_, data) => productRepo.insertProduct(data));

  ipcMain.handle(
    "product:get",
    async (_, id) => await productRepo.getProduct(id)
  );

  ipcMain.handle(
    "product:getAll",
    async () => await productRepo.getAllProduct()
  );

  ipcMain.on("product:delete", (_, id) => productRepo.deleteProduct(id));

  ipcMain.on("product:update", (_, values) =>
    productRepo.updateProduct(values.id, values.data)
  );
};

module.exports = { initRenderProductEvents, initProductEvents };
