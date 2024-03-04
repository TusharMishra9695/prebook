const { errorMessage } = require("../../utils/handleFunction");
const Contact = require("../../schemas/contactSchema");

// async function handleGetContact(req, res) {
//   try {
//     let result = await Contact.find();
//     if (result.length > 0) {
//       res.status(200).send({
//         result: result,
//         message: "Contact Fetched Sucessfully",
//         success: true,
//       });
//     } else {
//       res.status(200).send({
//         message: "Nobody Contacted",
//         success: false,
//       });
//     }
//   } catch (e) {
//     errorMessage(res, "Academy");
//   }
// }
async function handlePostContact(req, res) {
  try {
    let result = new Contact(req.body);
    await result.save();
    res.status(201).send({
      message: "Thank you for reaching us !",
      success: true,
    });
  } catch (e) {
    errorMessage(res, "Contact");
  }
}

module.exports = { handlePostContact };
