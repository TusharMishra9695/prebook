const { errorMessage } = require("../../utils/handleFunction");
const Signup = require("../../schemas/signupSchema");

async function handlePostUser(req, res) {
  const { phoneNumber } = req.body;
  try {
    let findUser = await Signup.findOne({ phoneNumber });
    if (findUser) {
      res.status(200).send({
        // 409 previously rmeoved because not working in native
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
    errorMessage(res, "signup");
  }
}

module.exports = { handlePostUser };
