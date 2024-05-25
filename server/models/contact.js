const mongoose = require('mongoose');

// Define schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

// Create model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
