const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // Field is mandatory
    },
    title: {
      type: String,
      required: true,
      minlength: 3, // Minimum length for title
    },
    desc: {
      type: String,
      required: true,
      minlength: 3, // Minimum length for description
    },
    rating: {
      type: Number,
      required: true,
      min: 0, // Minimum rating value
      max: 5, // Maximum rating value
    },
    lat: {
      type: String,
      required: true,
    },
    long: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

module.exports = mongoose.model("Pin", PinSchema);
