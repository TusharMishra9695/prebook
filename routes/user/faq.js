const express = require("express");
const { handleGetFaq, handlePostFaq } = require("../../controllers/user/faq");
const getFaq = express.Router();
const postFaq = express.Router();

getFaq.route("/").get(handleGetFaq);
postFaq.route("/").post(handlePostFaq);

module.exports = {
  getFaq,
  postFaq,
};
