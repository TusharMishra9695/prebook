const express = require("express");
const {
  handlePostUser,
  handleUpdatePass,
} = require("../../controllers/user/signup");
const router = express.Router();

router.route("/").post(handlePostUser).patch(handleUpdatePass);

module.exports = router;
