const mongoose = require("mongoose");

const freeClassSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    course_name: { type: String },
    phoneNumber: { type: Number, required: true },
    college: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    attended: { type: Boolean, default: false },
    state: { type: String },
    city: { type: String },
    // graduation_year: { type: String, required: true },
    // course: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("freeclass", freeClassSchema);
