const jwt = require("jsonwebtoken");

function setUser(user) {
  return jwt.sign(
    {
      phoneNumber: user.phoneNumber,
      password: user.password,
      role: user.role,
    },
    process.env.MONGODB_SECRET
  );
}
function verifyUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.MONGODB_SECRET); //expires
  } catch (e) {
    return false;
  }
}
module.exports = {
  setUser,
  verifyUser,
};
