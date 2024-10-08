const {
  errorMessage,
  generateOTP,
  expiresAt,
} = require("../../utils/handleFunction");
const Signup = require("../../schemas/signupSchema");
const FreeClass = require("../../schemas/FreeClassSchema");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const pepper = process.env.PEP_SECRET;

const client = require("twilio")(
  process.env.SID_SECRET,
  process.env.AUTH_SECRET
);

async function handlePostUser(req, res) {
  const { phoneNumber } = req.body;
  try {
    const otpGenerated = generateOTP();
    const expiredOTP = expiresAt;
    const message = {
      body: `Here is your OTP for signup ${otpGenerated}`,
      from: process.env.FROM_SECRET,
      to: `+91${phoneNumber}`,
    };
    let findUser = await Signup.findOne({ phoneNumber });

    if (findUser && findUser.isVerified) {
      res.status(200).send({
        // 409 previously removed because not working in native
        message: "Phone no. is already registered.",
        success: false,
      });
    } else if (findUser && !findUser.isVerified) {
      // await client.messages.create(message); // otp resending
      findUser.otp = otpGenerated;
      findUser.expiresAt = expiredOTP;
      await findUser.save();
      res.send({
        result: {
          phoneNumber,
          otp: otpGenerated,
        },
        message: `OTP sended to ${phoneNumber} ! Verify First`,
        success: true,
      });
    } else {
      // await client.messages.create(message); // otp sending
      const hashedPassword = bcrypt.hashSync(req.body.password + pepper, salt);
      let result = new Signup(req.body);
      result.otp = otpGenerated;
      result.expiresAt = expiredOTP;
      result.password = hashedPassword;
      await result.save(); // saving user to db
      res.status(200).send({
        result: {
          phoneNumber,
          otpGenerated,
        },
        message: `OTP sended to ${phoneNumber}`,
        success: true,
      });
    }
  } catch (e) {
    console.log(e, "error");
    errorMessage(res, "signup");
  }
}
async function handleUpdatePass(req, res) {
  const { newPassword, phoneNumber } = req.body;
  try {
    let User = await Signup.findOne({ phoneNumber });
    if (User) {
      User.password = newPassword;
      await User.save();
      res.status(200).send({ message: "Password Updated!", success: true });
    } else {
      res.send({ message: "User Not Found!", success: false });
    }
  } catch (e) {
    errorMessage(res, "update password");
  }
}
async function handleUpdateUserDetail(req, res) {
  const { name, email } = req.body;
  try {
    let User = await Signup.findOne({ phoneNumber: req.user.phoneNumber });
    if (User) {
      User.name = name;
      User.email = email;
      await User.save();
      res.status(200).send({ message: "Profile Updated!", success: true });
    } else {
      res.send({ message: "User Not Found!", success: false });
    }
  } catch (e) {
    errorMessage(res, "update user detail");
  }
}
async function handleGetUserDetail(req, res) {
  try {
    let User = await Signup.findOne({ phoneNumber: req.user.phoneNumber });
    let BookFreeClass = await FreeClass.find({
      phoneNumber: req.user.phoneNumber,
    });
    if (User) {
      let result = {
        name: User.name,
        email: User.email,
        phoneNumber: User.phoneNumber,
        state: User.state,
        city: User.city,
        free_class: BookFreeClass,
      };
      res.status(200).send({ result, success: true });
    } else {
      res.send({ message: "User Not Found!", success: false });
    }
  } catch (e) {
    errorMessage(res, "update user detail");
  }
}
module.exports = {
  handlePostUser,
  handleUpdatePass,
  handleUpdateUserDetail,
  handleGetUserDetail,
};
