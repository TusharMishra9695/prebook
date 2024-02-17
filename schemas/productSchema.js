const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    language: { type: String, required: true },
    // mode: { type: String, required: true },
    // classStart: { type: Date, required: true },
    // classEnd: { type: Date },
    // liveLectures: { type: String, required: true },
    // topics: { type: String, required: true },
    // seats: { type: Number, required: true },
    // original_price: { type: Number, required: true },
    // discounted_price: { type: Number, required: true },
    // category: { type: String, required: true },
    // imageUrl: [
    //   {
    //     url: { type: String, required: true },
    //   },
    // ],
    // videoUrl: [
    //   {
    //     url: { type: String },
    //   },
    // ],
    // description: {
    //   includes: [
    //     {
    //       heading: { type: String, required: true },
    //       points: [
    //         {
    //           detail: { type: String, required: true },
    //         },
    //       ],
    //     },
    //   ],
    //   faq: [
    //     {
    //       question: { type: String, required: true },
    //       answer: { type: String, required: true },
    //     },
    //   ],
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
