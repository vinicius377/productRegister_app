const { app, BrowserWindow } = require("electron");

const path = require("path");
const { initEvents } = require("./events/index");

const pagePath = path.join(__dirname, "..", "render", "pages");

const openWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preloader.js"),
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: true,
    },
  });

  win.loadFile(path.join(pagePath, "register", "index.html"));
};

app.on("window-all-closed", () => app.quit());

app.whenReady().then(() => {
  initEvents();
  openWindow();
});
