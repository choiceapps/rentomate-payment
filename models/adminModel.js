const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required : true,
        uniq : true
  },
  password: {
    type: String,
    required : true,
        uniq : true
  },
  ConfirmPassword: {
    type: String,
    required : true,
        uniq : true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("admins", adminSchema);
