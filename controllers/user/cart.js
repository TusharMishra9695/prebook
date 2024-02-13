const { errorMessage } = require("../../utils/handleFunction");
async function handleGetCart(req, res) {
  try {
    res.status(200).send("Get API");
  } catch (e) {
    errorMessage(res);
  }
}
async function handlePostCart(req, res) {
  try {
    res.status(200).send("Post API");
  } catch (e) {
    errorMessage(res);
  }
}

module.exports = { handleGetCart, handlePostCart };
