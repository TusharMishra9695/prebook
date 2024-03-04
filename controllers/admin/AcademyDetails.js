const { errorMessage } = require("../../utils/handleFunction");
const Academy = require("../../schemas/AcademySchema");
async function handleGetAcademyDetails(req, res) {
  try {
    let result = await Academy.findOne();
    if (result) {
      res.status(200).send({
        result: result,
        message: "Academy Fetched Sucessfully",
        success: true,
      });
    } else {
      res.status(200).send({
        message: "Nothing in Academy Details",
        success: false,
      });
    }
  } catch (e) {
    errorMessage(res, "Academy");
  }
}
async function handlePostAcademyDetails(req, res) {
  try {
    let result = new Academy(req.body);
    await result.save();
    res.status(201).send({ message: "Academy Details Listed", success: true });
  } catch (e) {
    errorMessage(res, "Academy");
  }
}

module.exports = { handleGetAcademyDetails, handlePostAcademyDetails };
