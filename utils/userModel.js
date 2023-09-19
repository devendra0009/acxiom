import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required:true },
});

const User = mongoose.models?.Commonn || mongoose.model('Commonn', userSchema);

module.exports = User;
