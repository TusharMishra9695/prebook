const { errorMessage } = require("../../utils/handleFunction");
const FAQ = require("../../schemas/faqSchema");
async function handleGetFaq(req, res) {
  try {
    let result = await FAQ.find();
    if (result.length > 0) {
      res.status(200).send({
        result: result,
        message: "FAQ's Fetched Sucessfully",
        success: true,
      });
    } else {
      res.status(200).send({
        message: "Nothing in FAQ's List",
        success: false,
      });
    }
  } catch (e) {
    errorMessage(res, "FAQ's");
  }
}
async function handlePostFaq(req, res) {
  try {
    let result = new FAQ(req.body);
    await result.save();
    res.status(201).send({ message: "FAQ's Listed", success: true });
  } catch (e) {
    errorMessage(res, "FAQ's3");
  }
}

module.exports = { handleGetFaq, handlePostFaq };
