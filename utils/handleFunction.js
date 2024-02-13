const errorMessage = (res) =>
  res.status(500).send({
    message: "Some Inte>rnal Error",
    success: "false",
  });

module.exports = { errorMessage };
