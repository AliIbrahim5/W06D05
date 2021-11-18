const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, default: new Date() },
  password: { type: String, truedefault: false },
  phone: { type: Number },
});

module.exports = mongoose.model("User", userSchema);
