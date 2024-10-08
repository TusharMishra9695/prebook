const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    language: { type: String, required: true },
    mode: { type: String, enum: ["offline", "online"], default: "online" },
    classStart: { type: String, required: true },
    brochure_link: { type: String },
    classEnd: { type: String },
    lectures: { type: Number, required: true },
    topics: { type: Number, required: true },
    interview_questions: { type: Number, required: true },
    projects: { type: Number, required: true },
    seats: { type: Number, required: true },
    duration: { type: Number, required: true }, //in months
    original_price: { type: Number, required: true },
    coupon: { type: Number, required: true },
    discounted_price: {
      monthly: { type: Number, required: true },
      discounted_monthly: { type: Number, required: true },
      onetime: { type: Number, required: true },
      half: { type: Number, required: true },
    },
    category: { type: String, required: true },

    imageUrl: [
      {
        url: { type: String, required: true },
      },
    ],
    videoUrl: [
      {
        url: { type: String },
      },
    ],
    includes: [
      {
        heading: { type: String, required: true },
        points: [
          {
            detail: { type: String, required: true },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
