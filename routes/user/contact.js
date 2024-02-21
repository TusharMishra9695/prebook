const express = require("express");
const { handlePostContact } = require("../../controllers/user/contact");
const router = express.Router();

router.route("/").post(handlePostContact);

module.exports = router;
