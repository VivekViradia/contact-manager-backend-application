const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please type name"],
    },
    email: {
      type: String,
      required: [true, "Please type email"],
      unique: [true, "Email address already registerd"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
