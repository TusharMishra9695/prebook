const express = require("express");
const {
  handleGetAbout,
  handlePostAbout,
} = require("../../controllers/admin/About&T&C");
const getAbout = express.Router();
const postAbout = express.Router();

getAbout.route("/").get(handleGetAbout);
postAbout.route("/").post(handlePostAbout);

module.exports = {
  getAbout,
  postAbout,
};
