const {
  errorMessage,
  generateOTP,
  expiresAt,
} = require("../../utils/handleFunction");
const Signup = require("../../schemas/signupSchema");
const client = require("twilio")(
  process.env.SID_SECRET,
  process.env.AUTH_SECRET
);

async function handlePostUser(req, res) {
  const { phoneNumber, email } = req.body;
  try {
    const otpGenerated = generateOTP();
    const expiredOTP = expiresAt;
    console.log(expiredOTP, expiredOTP, "otp");
    const message = {
      body: `Here is your OTP for signup ${otpGenerated}`,
      from: process.env.FROM_SECRET,
      to: `+91${phoneNumber}`,
    };
    let findUser = await Signup.findOne({ phoneNumber, email });
    if (findUser && findUser.isVerified) {
      res.status(200).send({
        // 409 previously removed because not working in native
        message: "Phone no. / Email is already registered.",
        success: false,
      });
    } else if (findUser && !findUser.isVerified) {
      // await client.messages.create(message);  // otp resending
      findUser.otp = otpGenerated;
      findUser.expiresAt = expiredOTP;
      await findUser.save();
      res.send({
        message: `OTP sended to ${phoneNumber} ! Verify First`,
        success: "true",
      });
    } else {
      // await client.messages.create(message);  // otp sending
      let result = new Signup(req.body);
      result.otp = otpGenerated;
      result.expiresAt = expiredOTP;
      await result.save(); // saving user to db
      res.status(201).send({
        message: `OTP sended to ${phoneNumber}`,
        success: true,
      });
    }
  } catch (e) {
    errorMessage(res, "signup");
  }
}

module.exports = { handlePostUser };
