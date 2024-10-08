const About = require("../../schemas/aboutSchema");
const { errorMessage } = require("../../utils/handleFunction");
async function handleGetAbout(req, res) {
  try {
    let result = await About.find(req.query);
    if (result.length > 0) {
      res.status(200).send({
        result: result,
        message: "About, T&C Fetched Sucessfully",
        success: true,
      });
    } else {
      res.status(200).send({
        message: "Nothing Available !",
        success: false,
      });
    }
  } catch (e) {
    errorMessage(res, "About");
  }
}
async function handlePostAbout(req, res) {
  try {
    let result = new About(req.body);
    await result.save();
    res.status(201).send({ message: "About or T&C Listed", success: true });
  } catch (e) {
    errorMessage(res, "About");
  }
}

module.exports = { handleGetAbout, handlePostAbout };
