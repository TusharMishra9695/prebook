const { errorMessage } = require("../../utils/handleFunction");

async function handlePostLogin(req, res) {
  try {
    res.status(200).send("Post API");
  } catch (e) {
    errorMessage(res);
  }
}

module.exports = { handlePostLogin };
