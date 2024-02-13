const express = require("express");
const { handlePostLogin } = require("../../controllers/user/login");
const router = express.Router();

router.route("/").post(handlePostLogin);

module.exports = router;
