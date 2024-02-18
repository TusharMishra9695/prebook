const express = require("express");
const {
  handleGetProductDetail,
} = require("../../controllers/user/productDetail");
const router = express.Router();

router.route("/").get(handleGetProductDetail);

module.exports = router;
