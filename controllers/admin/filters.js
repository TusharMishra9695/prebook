const { errorMessage } = require("../../utils/handleFunction");
const Filters = require("../../schemas/filterSchema");
async function handleGetFilters(req, res) {
  try {
    let result = await Filters.find();
    if (result) {
      res.status(204).send({
        result: result,
        message: "Nothing in Filters List",
        success: false,
      });
    } else {
      res.status(200).send({
        result: result,
        message: "Filters Fetched Sucessfully",
        success: true,
      });
    }
  } catch (e) {
    errorMessage(res, "Filters");
  }
}
async function handlePostFilters(req, res) {
  try {
    let result = new Filters(req.body);
    await result.save;
    res.status(201).send({ message: "Filter Listed", success: true });
  } catch (e) {
    errorMessage(res, "Filters");
  }
}

module.exports = { handleGetFilters, handlePostFilters };
