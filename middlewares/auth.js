const { verifyUser } = require("../service/auth");

async function restrictToLoggedInUserOnly(req, res, next) {
  const userId = req.headers["authorization"];
  const token = userId.split(" ")[1];
  const user = verifyUser(token);
  req.user = user;
  next();
}
module.exports = {
  restrictToLoggedInUserOnly,
};
