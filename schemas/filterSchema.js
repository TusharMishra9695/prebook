const mongoose = require("mongoose");

const filterSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    options: { type: [String], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("filters", filterSchema);
