const { default: mongoose } = require("mongoose");

const vendorSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    category: { type: String, required: true },
    items: {type:Array},
    role: { type: String, required:true },
    // Additional vendor-specific fields go here
  });
  
  const Vendor = mongoose.models?.Vendorr || mongoose.model('Vendorr', vendorSchema);
  
  module.exports = Vendor;
  