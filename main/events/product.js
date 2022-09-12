const productRepo = require("../repositories/products");
const { ipcMain, contextBridge, ipcRenderer } = require("electron");

const initRenderProductEvents = () => {
  contextBridge.exposeInMainWorld("product", {
    create: (data) => ipcRenderer.send("product:create", data),
    get: (id) => ipcRenderer.send("product:get", id),
    getAll: () => ipcRenderer.send("product:getAll"),
    delete: (id) => ipcRenderer.send("product:delete", id),
    update: (id, data) => ipcRenderer.send("product:update", { id, data }),
  });
};

const initProductEvents = () => {
  ipcMain.on("product:create", (_, data) => productRepo.insertProduct(data));

  ipcMain.on("product:get", (_, id) => productRepo.get(id));

  ipcMain.on("product:getAll", () => productRepo.getAll());

  ipcMain.on("product:delete", (_, id) => productRepo.deleteProduct(id));

  ipcMain.on("product:update", (_, values) =>
    productRepo.updateProduct(values.id, values.data)
  );
};

module.exports = { initRenderProductEvents, initProductEvents };
