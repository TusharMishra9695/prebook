const { errorMessage } = require("../../utils/handleFunction");
async function handleGetFilters(req, res) {
  try {
    res.status(200).send("Get API");
  } catch (e) {
    errorMessage(res);
  }
}
async function handlePostFilters(req, res) {
  try {
    res.status(200).send("Post API");
  } catch (e) {
    errorMessage(res);
  }
}

module.exports = { handleGetFilters, handlePostFilters };
