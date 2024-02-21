async function onlyForUser(req, res, next) {
  if (req.user.role === "user") {
    next();
  } else {
    res.status(201).send({ message: "Your are not user", success: false });
  }
}
module.exports = {
  onlyForUser,
};
