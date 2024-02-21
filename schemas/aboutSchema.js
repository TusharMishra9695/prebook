const mongoose = require("mongoose");

const aboutSchema = mongoose.Schema(
  {
    heading: { type: String, required: true },
    detail: { type: String, required: true },
    category: {
      type: String,
      enum: ["about", "terms"],
      default: "about",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("abouts", aboutSchema);
