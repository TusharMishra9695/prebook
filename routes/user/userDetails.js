const express = require("express");
const {
  handleUpdateUserDetail,
  handleGetUserDetail,
} = require("../../controllers/user/signup");
const router = express.Router();

router.route("/").get(handleGetUserDetail).patch(handleUpdateUserDetail);

module.exports = router;
