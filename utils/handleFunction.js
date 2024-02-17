const errorMessage = (res, name) => {
  res.status(500).send({
    message: `Some Internal Error From ${name}`,
    success: "false",
  });
};
module.exports = { errorMessage };
