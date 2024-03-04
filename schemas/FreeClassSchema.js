const mongoose = require("mongoose");

const freeClassSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    occupation: { type: String, required: true },
    graduation_year: { type: String, required: true },
    location: { type: String },
    date: { type: String, required: true },
    time: { type: String, required: true },
    college: { type: String, required: true },
    attended: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("freeclass", freeClassSchema);
