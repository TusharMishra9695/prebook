const express = require("express");
const {
  handleGetFilters,
  handlePostFilters,
} = require("../../controllers/admin/filters");
const router = express.Router();

router.route("/").get(handleGetFilters).post(handlePostFilters);

module.exports = router;
