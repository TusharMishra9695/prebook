const mongoose = require("mongoose");

const signupSchema = mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, unique: true },
    phoneNumber: { type: Number, required: true },
    password: { type: String, required: true },
    otp: { type: String },
    expiresAt: { type: Date },
    registrationDate: { type: Date, default: Date.now() },
    isVerified: { type: Boolean, default: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    state: { type: String, default: "Uttar Pradesh" },
    city: { type: String, default: "Kanpur" },
    gender: { type: String, default: "NA" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("signup", signupSchema);
