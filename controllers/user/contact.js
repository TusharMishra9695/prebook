const { errorMessage } = require("../../utils/handleFunction");
const Contact = require("../../schemas/contactSchema");

async function handlePostContact(req, res) {
  try {
    let result = new Contact(req.body);
    await result.save();
    res.status(201).send({
      message: "Thank you for reaching us ! We will reach you with in 24 hours",
      success: true,
    });
  } catch (e) {
    errorMessage(res, "Contact");
  }
}

module.exports = { handlePostContact };
