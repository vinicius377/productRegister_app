const { initProductEvents, initRenderProductEvents } = require("./product");
const { db } = require("../db/sequelize");

const syncDB = async () => {
  await db.sync();
};

const initRenderEvents = () => {
  initRenderProductEvents();
};

const initEvents = async () => {
  initProductEvents();
  await syncDB();
};

module.exports = { initRenderEvents, initEvents };
