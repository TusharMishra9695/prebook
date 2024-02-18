const mongoose = require("mongoose");

const faqSchema = mongoose.Schema(
  {
    question: { type: String, required: true },
    reply: [
      {
        answers: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("faqs", faqSchema);
