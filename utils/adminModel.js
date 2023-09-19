const { default: mongoose } = require("mongoose");

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required:true },
  });
  
  const Admin = mongoose.models?.Addmin || mongoose.model('Addmin', adminSchema);
  
  module.exports = Admin;
  