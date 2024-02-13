const { errorMessage } = require("../../utils/handleFunction");
const Product = require("../../schemas/productSchema");
async function handleGetProducts(req, res) {
  try {
    let result = await Product.find();
    if (result) {
      res.status(204).send({
        result: result,
        message: "Nothing in Product List",
        success: false,
      });
    } else {
      res.status(200).send({
        result: result,
        message: "Products Fetched Sucessfully",
        success: true,
      });
    }
  } catch (e) {
    errorMessage(res, "Products");
  }
}
async function handlePostProducts(req, res) {
  try {
    let result = new Product(req.body);
    await result.save;
    res.status(201).send({ message: "Product Listed", success: true });
  } catch (e) {
    errorMessage(res, "Products");
  }
}

module.exports = { handleGetProducts, handlePostProducts };
