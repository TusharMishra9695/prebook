const express = require("express");
const {
  handleGetAcademyDetails,
  handlePostAcademyDetails,
} = require("../../controllers/admin/AcademyDetails");
const getAcademy = express.Router();
const postAcademy = express.Router();

getAcademy.route("/").get(handleGetAcademyDetails);
postAcademy.route("/").post(handlePostAcademyDetails);

module.exports = {
  getAcademy,
  postAcademy,
};
