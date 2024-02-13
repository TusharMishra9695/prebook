const { errorMessage } = require("../../utils/handleFunction");
const Signup = require("../../schemas/signupSchema");

async function handlePostUser(req, res) {
  const { phoneNumber } = req.body;
  try {
    let findUser = await Signup.findOne({ phoneNumber });
    if (findUser) {
      res.status(409).send({
        message: "Phoneno. is already registered.",
        success: false,
      });
    } else {
      let result = new Signup(req.body);
      await result.save();
      res
        .status(201)
        .send({ message: "User Registered successfully ", success: true });
    }
  } catch (e) {
    console.log(e, "error");
    errorMessage(res, "signup");
  }
}

module.exports = { handlePostUser };
