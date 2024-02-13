const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discounted_price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: String, required: true },
    packagingType: { type: String, required: true },
    productionDate: { type: Date, default: Date.now(), required: true },
    expirationDate: { type: Date, default: Date.now(), required: true },
    ingredients: { type: [String] },
    nutritionalInformation: {
      calories: { type: Number, required: true },
      fat: { type: Number, required: true },
      protein: { type: Number, required: true },
    },
    stockQuantity: { type: Number, default: 0, required: true },
    isAvailable: { type: Boolean, default: true, required: true },
    imageUrl: [
      {
        url: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
