const { errorMessage } = require("../../utils/handleFunction");
const Login = require("../../schemas/signupSchema");
const { setUser } = require("../../services/auth");
const bcrypt = require("bcryptjs");

async function handlePostLogin(req, res) {
  const { password, phoneNumber, role } = req.body;
  try {
    let findUser = await Login.findOne({ phoneNumber, role });
    if (!findUser) {
      return res
        .status(404)
        .json({ message: "Please Signup First!", success: false });
    } else if (!findUser.isVerified) {
      return res
        .status(404)
        .json({ message: "Please Verify Signup OTP!", success: false });
    } else {
      const passwordMatch = await bcrypt.compare(
        password + process.env.PEP_SECRET,
        findUser.password
      );
      if (passwordMatch) {
        const token = setUser(req.body);
        res.status(200).send({
          token: token,
          message: "Login Successfully!",
          success: true,
        });
      } else {
        res
          .status(401)
          .json({ message: "Invalid credentials!", success: false });
      }
    }
  } catch (e) {
    console.log(e, "error");
    errorMessage(res, "Login");
  }
}

module.exports = { handlePostLogin };
