const { errorMessage } = require("../../utils/handleFunction");
const Login = require("../../schemas/signupSchema");

async function handlePostLogin(req, res) {
  const { password, phoneNumber } = req.body;
  try {
    let findUser = await Login.find({ phoneNumber, password });
    if (findUser) {
      res.status(200).send({
        message: "Login Successfully",
        success: true,
      });
    } else {
      res.status(401).send({
        message: "PhoneNo / Password not matched",
        success: false,
      });
    }
  } catch (e) {
    errorMessage(res);
  }
}

module.exports = { handlePostLogin };
