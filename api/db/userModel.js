const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add First name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("USER", userSchema);
