const express = require("express");
const {
  handleGetCart,
  handlePostCart,
} = require("../../controllers/user/cart");
const router = express.Router();

router.route("/").get(handleGetCart).post(handlePostCart);

module.exports = router;
