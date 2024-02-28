const User = require("../../schemas/signupSchema");
async function handleVerify(req, res) {
  try {
    const { phoneNumber, otp } = req.body;
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found.", success: false });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP.", success: false });
    }

    // Marking user account as verified
    user.verified = true;
    await user.save();
    res.status(200).json({
      message: "User signed up successfully. Account verified.",
      success: true,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred during OTP verification." });
  }
}
module.exports = { handleVerify };
