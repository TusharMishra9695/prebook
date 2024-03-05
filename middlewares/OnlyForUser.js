async function onlyForUser(req, res, next) {
  console.log(req.user, "user ki details kya ai");
  if (req.user.role === "user") {
    next();
  } else {
    res.status(201).send({ message: "You are not user", success: false });
  }
}
module.exports = {
  onlyForUser,
};
