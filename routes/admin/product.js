const express = require("express");
const {
  handleGetProducts,
  handlePostProducts,
} = require("../../controllers/admin/product");
const getProducts = express.Router();
const postProducts = express.Router();

getProducts.route("/").get(handleGetProducts);
postProducts.route("/").post(handlePostProducts);

module.exports = {
  getProducts,
  postProducts,
};
