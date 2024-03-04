const mongoose = require("mongoose");

const academySchema = mongoose.Schema(
  {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    socail_links: [
      {
        name: { type: String },
        link: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("academydetails", academySchema);
