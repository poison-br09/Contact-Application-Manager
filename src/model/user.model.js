const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
      unique: [true, "Please use another mail id"],
    },
    password: {
      type: "String",
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
