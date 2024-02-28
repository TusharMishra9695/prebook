const errorMessage = (res, name) => {
  res.status(500).send({
    message: `Some Internal Error From ${name}`,
    success: "false",
  });
};
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}
module.exports = { errorMessage, generateOTP };
