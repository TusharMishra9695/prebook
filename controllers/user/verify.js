const User = require("../../schemas/signupSchema");
const { errorMessage } = require("../../utils/handleFunction");
async function handleVerify(req, res) {
  try {
    const { phoneNumber, otp } = req.body;
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found.", success: false });
    } else if (user.otp !== otp) {
      return res
        .status(400)
        .json({ message: "Invalid OTP! Resend OTP", success: false });
    } else if (user.expiresAt < new Date()) {
      return res
        .status(400)
        .json({ message: "OTP has expired! Resend OTP", success: false });
    } else {
      // Marking user account as verified
      user.isVerified = true;
      user.otp = "";
      user.expiresAt = "";
      await user.save();
      res.status(200).json({
        message: "Account verified!",
        success: true,
      });
    }
  } catch (err) {
    errorMessage(res, "Verify");
  }
}
module.exports = { handleVerify };
