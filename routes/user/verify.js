const express = require("express");
const { handleVerify } = require("../../controllers/user/verify");
router = express.Router();

router.route("/").post(handleVerify);

module.exports = router;
