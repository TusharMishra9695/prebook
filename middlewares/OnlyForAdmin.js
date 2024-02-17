async function onlyForAdmin(req, res, next) {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(201).send({ message: "Your are not admin", success: false });
  }
}
module.exports = {
  onlyForAdmin,
};
