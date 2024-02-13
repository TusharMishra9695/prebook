const { errorMessage } = require("../../utils/handleFunction");
async function handleGetProducts(req, res) {
  try {
    res.status(200).send("Get API");
  } catch (e) {
    errorMessage(res);
  }
}
async function handlePostProducts(req, res) {
  try {
    res.status(200).send("Post API");
  } catch (e) {
    errorMessage(res);
  }
}

module.exports = { handleGetProducts, handlePostProducts };
