const express = require("express");
const { handlePostFreeClass } = require("../../controllers/user/freeClass");
const router = express.Router();

router.route("/").post(handlePostFreeClass);

module.exports = router;
