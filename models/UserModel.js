const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String, // Corrected from `typeof` to `type`
      required: true, // Corrected from `require` to `required`
      minlength: 3, // Minimum length for username
      maxlength: 20, // Maximum length for username
      unique: true, // Ensures the username is unique
    },
    email: {
      type: String, // Corrected from `typeof` to `type`
      required: true, // Corrected from `require` to `required`
      maxlength: 30, // Maximum length for email
      unique: true, // Ensures the email is unique
    },
    password: {
      type: String, // Corrected from `typeof` to `type`
      required: true, // Corrected from `require` to `required`
      minlength: 4, // Minimum length for password
      
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt timestamps
);

module.exports = mongoose.model("User", UserSchema);
