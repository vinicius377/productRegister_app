const { db } = require("../db/sequelize");
const { DataTypes } = require("sequelize");

const productModel = db.define("product", {
  sku: {
    type: DataTypes.STRING,
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.NUMBER,
  },
});

module.exports = productModel;
