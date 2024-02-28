const mongoose = require("mongoose");

const signupSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    phoneNumber: { type: Number, required: true },
    password: { type: String, required: true },
    otp: { type: String },
    expiresAt: { type: Date },
    registrationDate: { type: Date, default: Date.now() },
    isVerified: { type: Boolean, default: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("signup", signupSchema);
