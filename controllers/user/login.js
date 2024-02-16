const { errorMessage } = require("../../utils/handleFunction");
const Login = require("../../schemas/signupSchema");
const { setUser } = require("../../services/auth");

async function handlePostLogin(req, res) {
  const { password, phoneNumber } = req.body;
  try {
    let findUser = await Login.findOne({ phoneNumber, password });
    if (findUser) {
      const token = setUser(findUser);
      res.status(200).send({
        token: token,
        message: "Login Successfully",
        success: true,
      });
    } else {
      res.status(200).send({
        // 401
        message: "PhoneNo / Password not matched",
        success: false,
      });
    }
  } catch (e) {
    errorMessage(res, "Login");
  }
}

module.exports = { handlePostLogin };
