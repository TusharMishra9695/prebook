const { verifyUser } = require("../services/auth");

async function restrictToLoggedInOnly(req, res, next) {
  const userId = req.headers["authorization"];
  if (userId) {
    // auth provided or not
    const token = userId.split(" ")[1];
    const user = verifyUser(token);
    if (!user) {
      res.send({
        message: "Unauthorized access !", // Token not matched
        success: false,
      });
    } else {
      req.user = user; // Token matched send user data
      next();
    }
  } else {
    res.send({ message: "Please login first !", success: false });
  }
}
module.exports = {
  restrictToLoggedInOnly,
};
