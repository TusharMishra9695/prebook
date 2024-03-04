const mongoose = require("mongoose");

const signupSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    phoneNumber: { type: Number, required: true },
    password: { type: String, required: true },
    otp: { type: String },
    expiresAt: { type: Date },
    registrationDate: { type: Date, default: Date.now() },
    isVerified: { type: Boolean, default: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    location: { type: String },
    gender: { type: String, default: "NA" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("signup", signupSchema);
