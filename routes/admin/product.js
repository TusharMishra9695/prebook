const express = require("express");
const {
  handleGetProducts,
  handlePostProducts,
} = require("../../controllers/admin/product");
const router = express.Router();

router.route("/").get(handleGetProducts).post(handlePostProducts);

module.exports = router;
