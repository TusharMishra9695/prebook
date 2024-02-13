const mongoose = require("mongoose");

const signupSchema = mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true },
    password: { type: String, required: true },
    fullName: { type: String },
    address: { type: String },
    avatar: { type: String },
    dob: { type: Date },
    registrationDate: { type: Date, default: Date.now() },
    isVerified: { type: Boolean, default: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("signup", signupSchema);
