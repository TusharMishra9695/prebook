const express = require("express");
const { handlePostUser } = require("../../controllers/user/signup");
const router = express.Router();

router.route("/").post(handlePostUser);

module.exports = router;
