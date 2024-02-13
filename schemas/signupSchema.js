const mongoose = require("mongoose");

const signupSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    dob: { type: Date, default: Date.now() },
    address: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    avatar: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    isVerified: { type: Boolean, default: false },
    registrationDate: { type: Date, default: Date.now() },
  },
  { timestamps: true }
);
module.exports = mongoose.model("singup", signupSchema);
