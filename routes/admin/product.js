const express = require("express");
const {
  handleGetProducts,
  handlePostProducts,
} = require("../../controllers/admin/product");
const routerget = express.Router();
const routerpost = express.Router();

routerget.route("/").get(handleGetProducts);
routerpost.route("/").post(handlePostProducts);

module.exports = {
  routerget,
  routerpost,
};
