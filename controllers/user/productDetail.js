const { errorMessage } = require("../../utils/handleFunction");
const ProductDetail = require("../../schemas/productSchema");

async function handleGetProductDetail(req, res) {
  try {
    let productDetail = await ProductDetail.find({ _id: req.query._id });
    if (productDetail.length > 0) {
      res.status(200).send({
        result: productDetail,
        message: "Product Detail Fetched",
        success: true,
      });
    } else {
      res.status(200).send({
        result: [],
        message: "Nothing in Product Detail List",
        success: false,
      });
    }
  } catch (e) {
    console.log(e, "product detail error");
    errorMessage(res, "product detail");
  }
}

module.exports = {
  handleGetProductDetail,
};
