const { errorMessage } = require("../../utils/handleFunction");
const FreeClass = require("../../schemas/FreeClassSchema");

async function handlePostFreeClass(req, res) {
  try {
    let result = new FreeClass(req.body);
    await result.save();
    res.status(201).send({ message: "Done!", success: true });
  } catch (e) {
    errorMessage(res, "FreeClass");
  }
}

module.exports = { handlePostFreeClass };
