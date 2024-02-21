const { errorMessage } = require("../../utils/handleFunction");
const Signup = require("../../schemas/signupSchema");
const nodemailer = require("nodemailer");

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}
const otpStore = {};
async function handlePostUser(req, res) {
  const { phoneNumber, email, password } = req.body;
  try {
    const otp = generateOTP();
    console.log(otp, "otp aya");
    // res.send({ otp: otp, mesaage: "otp generated" });
    // Store OTP against the email (In real scenario, OTP should be stored in database)
    otpStore[email] = otp;

    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    let message = {
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: `Successfully Register with us. ${otp}`, // plain text body
      html: "<b>Successfully Register with us.</b>", // html body
    };

    transporter
      .sendMail(message)
      .then((info) => {
        return res.status(201).json({
          msg: "you should receive an email",
          info: info.messageId,
          preview: nodemailer.getTestMessageUrl(info),
        });
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });
    // let findUser = await Signup.findOne({ phoneNumber });
    // if (findUser) {
    //   res.status(200).send({
    //     // 409 previously rmeoved because not working in native
    //     message: "Phoneno. is already registered.",
    //     success: false,
    //   });
    // } else {
    //   let result = new Signup(req.body);
    //   await result.save();
    //   res
    //     .status(201)
    //     .send({ message: "User Registered successfully ", success: true });
    // }
  } catch (e) {
    errorMessage(res, "signup");
  }
}

module.exports = { handlePostUser };
