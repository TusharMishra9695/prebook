const { errorMessage } = require("../../utils/handleFunction");
const Cart = require("../../schemas/cartSchema");
async function handleGetCart(req, res) {
  try {
    let result = await Cart.find();
    if (result) {
      res.status(204).send({
        result: result,
        message: "Nothing in Cart List",
        success: false,
      });
    } else {
      res.status(200).send({
        result: result,
        message: "Cart Data Fetched Sucessfully",
        success: true,
      });
    }
  } catch (e) {
    errorMessage(res, "Cart");
  }
}
async function handlePostCart(req, res) {
  try {
    let result = new Cart(req.body);
    await result.save;
    res.status(201).send({ message: "Product added in cart", success: true });
  } catch (e) {
    errorMessage(res, "Cart");
  }
}

module.exports = { handleGetCart, handlePostCart };
